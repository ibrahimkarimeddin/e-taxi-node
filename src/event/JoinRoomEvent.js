var { currentUser } = require("../utils/config");


function handleJoinRoom(socket , io ){
    return (room_name) =>{
      
       currentUser = currentUser.findIndex(user => user.socketId == socket.id)
          currentUser[currentUser]['room'] =room_name
          currentUser[currentUser]['base_room'] =  room_name.slice(0, room_name.indexOf('.'))
      
          socket.join(room_name);
          handelDashboardSocketDebug('join_room' , socket.id , room_name , room_name , io)

    }
  }

  

  module.exports = {handleJoinRoom}