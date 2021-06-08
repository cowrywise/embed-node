const axios = require('axios');
const constants = require('./constants');
const request = require('../helper/enc_request');



module.exports = async function(config, endpoint = "", options = {}) {

  
  // Boolean flag for retrying unauthenticated requests
  let _retry = true

  // URL
  let url = constants.base_url + "/api/v1" + endpoint;

  // HEADERS
  let headers = {
    "content-type": "application/json",
    "Authorization": 'Bearer '+ config.api_key
  };

  // Set up config
  let axios_configuration = {
    url,
    options,
    headers
  };

  // Response interceptor
  axios.interceptors.response.use((response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config;
    // console.log(error);
    if (error.response.status === 401 && _retry) {
      _retry = false;
      const access_token = (await request(config)).access_token;
      console.log('New access token: ' +access_token);
      originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
      return axios(originalRequest);
    }
    else {
      return error;
    }
  });


  // Return the result of the executed request
  return axios(axios_configuration)
    .then(function (response) {
        return response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}