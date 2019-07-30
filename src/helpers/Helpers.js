import axios from 'axios';

export function ajax(url, method, data = null, appendBaseUrl = true) {
    return new Promise((resolve, reject) => {
    
      let BaseUrl = 'http://localhost:80/react_project_backend';
    let Header = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    let apiUrl = url;
      if (appendBaseUrl)
        apiUrl = BaseUrl + url;
      var options = {
        url: apiUrl,
        method: method,
        Header
      };
      if (data) {
        options.data = data;
      }
      axios(options).then((res) => {
        resolve(res.data);
      }).catch((err) => {
        if (err.response) {
            console.warn(err.response);
        }
      })
    })
  }