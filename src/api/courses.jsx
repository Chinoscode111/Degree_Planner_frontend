// import axios from 'axios'

//     var URL = 'http://127.0.0.1:8000/';


// export default axios.create({
//     baseURL: 'http://127.0.0.1:8000/'
// })

var API_URL = 'http://localhost:8000/api/';
var hostname = window.location.hostname;
if (hostname === 'localhost') {
  API_URL = `http://${hostname}:8000/api/`;
} else {
  API_URL = `https://${hostname}/api/`;
}
export {API_URL};