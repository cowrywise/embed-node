require('dotenv').config();

const axios = require('axios');

const perform = async function(config = Object, options = Object) {

  
  // Boolean flag for retrying unauthenticated requests
  let _retry = true

  // URL
  let url = process.env.BASE_URL;
  if(options['endpoint'].includes("/o/token")) { url += options['endpoint'] } else { url += "/api/v1" + options['endpoint'] }


  // HEADERS
  let headers = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded"
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

  // Selectively transform request
  if(!(options['endpoint'] === "POST") && !(options['endpoint'] === "/transfers")) {
    axios_configuration['transformRequest'] = getQueryString
  }


  // Response interceptor
  axios.interceptors.response.use((response) => {
    return response
  },
  async function (error) {
    // console.log(error);
    if (error.response && (error.response.status === 401 && _retry)) {
      _retry = false;
      const access_token = (await perform(config, {
        method: "POST",
        endpoint: "/o/token/",
        data: {
          grant_type: 'client_credentials',
          client_id: config.client_id,
          client_secret: config.client_secret
        }
      })).access_token;
      console.log('New access token: ' +access_token);
      delete headers['Authorization'];
      headers['Authorization'] = 'Bearer ' + access_token;
      return axios({
        method: options['method'],
        url: url,
        data: options['data'],
        headers: headers,
        withCredentials: true,
        transformRequest: getQueryString
      });
    }
    else {
      return error.response;
    }
  });


  // Return the result of the executed request
  return axios(axios_configuration)
    .then(function (response) {
      if(response) {
        return response.data
      }
      else {
        return response;
      }
      
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getQueryString(data = {}) {
  return Object.keys(data).map(key => {
    let val = data[key]
    if (val !== null && typeof val === 'object') val = getQueryString(val)
    return `${key}=${encodeURIComponent(`${val}`)}`
  }).join('&')
}

module.exports = {
  perform
}