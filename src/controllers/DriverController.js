const { currentUser } = require("../utils/config");

async function handelDriverOnline(req, res) {

   
  
    res.json(currentUser)
  }
  
  module.exports = { handelDriverOnline };