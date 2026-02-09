const axios = require('axios');

const instance = axios.create();

const perform = async function(config = {}, options = {}) {

  
  // Boolean flag for retrying unauthenticated requests
  let _retry = true

  // URL
  let baseUrl = config['embed_api_base_url'] || '';
  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, -1);
  }
  
  let url = baseUrl;
  if (options['endpoint'].includes("/o/token")) {
    if (url.includes("/api/v1")) {
      url = url.replace("/api/v1", "");
    }
    url += options['endpoint'];
  } else {
    if (!url.includes("/api/v1")) {
      url += "/api/v1";
    }
    url += options['endpoint'];
  }


  // HEADERS
  let headers = {};
  if (options['endpoint'].includes("/o/token")) {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  } else {
    headers["Content-Type"] = "application/json";
  }
  
  if(!options['endpoint'].includes("/o/token")) { headers['Authorization'] = 'Bearer '+ config['api_key'] }
  if((options['method'] === "POST") && (options['data']) && (options['data']['idempotency_key'])) {headers['Embed-Idempotency-Key'] = options['data']['idempotency_key']}

  
  // Set up config
  let axios_configuration = {
    method: options['method'],
    url: url,
    data: options['data'],
    headers: headers,
    withCredentials: true
  };

  // Selectively transform request for token only
  if(options['endpoint'].includes("/o/token")) {
    axios_configuration['transformRequest'] = [getQueryString]
  }

  // Return the result of the executed request
  return instance(axios_configuration)
    .then(function (response) {
      if(response) {
        return response.data
      }
      return response;
    })
    .catch(async function (error) {
        if (error.response && (error.response.status === 401 && _retry && !options['endpoint'].includes("/o/token"))) {
          _retry = false;
          const authData = await perform(config, {
            method: "POST",
            endpoint: "/o/token/",
            data: {
              grant_type: 'client_credentials',
              client_id: config.client_id,
              client_secret: config.client_secret
            }
          });
          
          if (authData && authData.access_token) {
            const access_token = authData.access_token;
            config['api_key'] = access_token; // Update config for future requests
            headers['Authorization'] = 'Bearer ' + access_token;
            
            const retry_config = {
              ...axios_configuration,
              headers: headers
            };
            return instance(retry_config).then(res => res.data);
          }
        }
        return error.response ? error.response.data : undefined;
    });
}

function getQueryString(data = {}) {
  if (typeof data === 'string') return data;
  return Object.keys(data).map(key => {
    let val = data[key]
    if (val !== null && typeof val === 'object') val = JSON.stringify(val)
    return `${key}=${encodeURIComponent(`${val}`)}`
  }).join('&')
}

module.exports = {
  perform
}