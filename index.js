const axios = require("axios");

exports.upload = function (filename, url) {
  // https://stackoverflow.com/questions/48980380/returning-data-from-axios-api

  return axios({
    method: "post",
    url: "https://api.animemoe.us/discord-storage/",
    data: { filename: filename, url: url },
  })
    .then((response) => ({ status: response.status, data: response.data }))
    .catch((err) => ({ status: err.response.status, data: err.response.data }));
};
