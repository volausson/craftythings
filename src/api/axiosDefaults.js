import axios from 'axios';

axios.defaults.baseURL = 'https://cic-api.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axiox.defaults.withCredentials = true;