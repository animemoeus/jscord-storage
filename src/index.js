import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

const uploadFromURL = (filename, url) => {
  const data = new FormData();
  data.append('filename', filename);
  data.append('url', url);

  const config = {
    method: 'post',
    url: 'https://discord-storage.animemoe.us/api/upload-from-url/',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    },
    data: data
  };

  return axios(config)
    .then(response => ({ success: true, data: response.data }))
    .catch(() => ({ success: false, data: {} }));
};

const uploadFromFile = filePath => {
  // return immediately if the file is not existing
  if (!fs.existsSync(filePath)) {
    return { success: false, data: {} };
  }

  const data = new FormData();
  data.append('file', fs.createReadStream(filePath));

  const config = {
    method: 'post',
    url: 'https://discord-storage.animemoe.us/api/upload-from-file/',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    },
    data: data
  };

  return axios(config)
    .then(response => ({ success: true, data: response.data }))
    .catch(() => ({ success: false, data: {} }));
};

export { uploadFromFile, uploadFromURL };
