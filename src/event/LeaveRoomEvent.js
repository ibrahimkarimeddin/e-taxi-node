function handleLeaveRoom(socket , io){
    return (room_name)=>{
      socket.leave(room_name);
      handelDashboardSocketDebug('leave_room' , socket.id , room_name , room_name , io)

    }
  }
  
  


module.exports = {handleLeaveRoom}