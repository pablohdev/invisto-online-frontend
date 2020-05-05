import axios from 'axios';


export default axios.create({
    baseURL: "http://invisto-online-backend.herokuapp.com",
    responseType: "json"
});
