
const { default: axios } = require('axios');
const { MAIN_BACKEND_URL } = require('../config');




 const fetchFn = axios.create({
    baseURL:MAIN_BACKEND_URL
})


module.exports = {fetchFn}






