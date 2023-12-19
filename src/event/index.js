
const { handleNewUser } = require('./NewUserEvent');
const { handleTrackDriver } = require('./TrackLocationEvent');
const { handleOffline } = require('./DisconnectEvent');
const { handleLeaveRoom } = require('./LeaveRoomEvent');
const { handleJoinRoom } = require('./JoinRoomEvent');
const { handleOrderStatus } = require('./OrderStatusEvent');
const { handelDashboardSocketDebug } = require('./SocketDashboardDebugEvent');

function socketEvents(io) {

  return (socket)=>{
    handelDashboardSocketDebug('connect' , socket.id , null , null , io )

    console.log('connect success');
    socket.on("new_user", handleNewUser(socket , io));
    socket.on("offline", handleOffline(socket , io));
    socket.on("join_room", handleJoinRoom(socket , io));
    socket.on('leave_room', handleLeaveRoom(socket , io));
    socket.on('order_status', handleOrderStatus(socket , io));
    socket.on('track_driver', handleTrackDriver(socket , io));
    socket.on('disconnect', handleOffline(socket , io));
  }

}









// Define other socket event handlers in a similar fashion

module.exports = { socketEvents };
