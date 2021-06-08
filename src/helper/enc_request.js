const axios = require('axios');
const constants = require('./constants')


module.exports = async function(config) {

    return axios.post(constants.base_url + "/o/token/", { 
        grant_type: config.grant_type,
        client_id: config.client_id,
        client_secret: config.client_secret
    }, 
    {
        headers : {
          "Content-Type" : "application/x-www-form-urlencoded"
        },
        withCredentials: true,
        transformRequest: getQueryString
      })
      .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        // console.log(error);
    });
}



function getQueryString(data = {}) {
    return Object.entries(data)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }