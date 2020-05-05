import axios from 'axios';


export default axios.create({
    baseURL: "https://invisto-online-backend.herokuapp.com",
    responseType: "json"
});
