const axios = require('axios');
const constants = require('./constants');



const perform = async function(config = Object, options = Object) {

  
  // Boolean flag for retrying unauthenticated requests
  let _retry = true

  // URL
  let url = constants.base_url;
  if(options['endpoint'].includes("/o/token")) { url += options['endpoint'] } else { url += "/api/v1" + options['endpoint'] }


  // HEADERS
  let headers = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded"
  if(!options['endpoint'].includes("/o/token")) { headers['Authorization'] = 'Bearer '+ config['api_key'] }

  
  // Set up config
  let axios_configuration = {
    method: options['method'],
    url: url,
    data: options['data'],
    headers: headers,
    withCredentials: true,
    transformRequest: getQueryString
  };

  // Response interceptor
  axios.interceptors.response.use((response) => {
    return response
  },
  async function (error) {
    // console.log(error);
    if (error.response.status === 401 && _retry) {
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
      return response.data;
      
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getQueryString(data = {}) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

module.exports = {
  perform
}