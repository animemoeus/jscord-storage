const axios = require("axios");
const validator = require("validator");
const FormData = require("form-data");

const fs = require("fs");

const upload = (filename, file) => {
  // check if file url is valid
  const urlIsValid = validator.isURL(file);

  if (urlIsValid) {
    // upload from url

    const data = new FormData();
    const url = file;

    data.append("filename", filename);
    data.append("url", url);

    const config = {
      method: "post",
      url: "https://discord-storage.animemoe.us/upload-from-url/",
      headers: {
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

    data.append("filename", "test");
    data.append("file", fs.createReadStream(file));

    const config = {
      method: "post",
      url: "https://discord-storage.animemoe.us/upload-from-file/",
      headers: {
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
