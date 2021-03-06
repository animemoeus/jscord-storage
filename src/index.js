const axios = require("axios");
const validator = require("validator");
const FormData = require("form-data");

const fs = require("fs");

const upload = (filename, file) => {
  // check if file url is valid
  const isURL = validator.isURL(file);

  if (isURL) {
    // upload from url
    const data = new FormData();
    const url = file;
    data.append("filename", filename);
    data.append("url", url);

    const config = {
      method: "post",
      url: "https://discord-storage.animemoe.us/upload-from-url/",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Referer: "jscord-storage-0.0.10",
        ...data.getHeaders(),
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        return { status: response.status, data: response.data };
      })
      .catch(function (error) {
        return { status: error.response.status, data: error.response.data };
      });
  } else {
    // upload from file
    const data = new FormData();
    data.append("filename", filename);
    data.append("file", fs.createReadStream(file));

    const config = {
      method: "post",
      url: "https://discord-storage.animemoe.us/upload-from-file/",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Referer: "jscord-storage-0.0.10",
        ...data.getHeaders(),
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        return { status: response.status, data: response.data };
      })
      .catch(function (error) {
        return { status: error.response.status, data: error.response.data };
      });
  }
};

exports.upload = upload;
