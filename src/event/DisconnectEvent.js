var { currentUser } = require("../utils/config");
const { handelDashboardSocketDebug } = require("./SocketDashboardDebugEvent");


function handleOffline(socket , io) {
    return () => {
      console.log("disconnecting");
      currentUser = currentUser.filter((user) => user.socketId !== socket.id)
  

      handelDashboardSocketDebug('disconnect' , socket.id , null , null , io )
    };
  }

  module.exports = {handleOffline}