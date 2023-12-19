var { currentUser } = require("../utils/config");
const { handelDashboardSocketDebug } = require("./SocketDashboardDebugEvent");



function handleNewUser(socket  , io) {
    return (data) => {
      
      if (!currentUser.some((user) => user.userId === data.userId)) {  
        // if user is not added before
        currentUser.push({ userId: data.userId , userName:data.userName, socketId: socket.id  , room:null});
        console.log("new user is here!", currentUser);
      }
      handelDashboardSocketDebug('new_user' , socket.id , null , data , io)

      // Logic for new user joining
    };
  }


  module.exports = {handleNewUser}