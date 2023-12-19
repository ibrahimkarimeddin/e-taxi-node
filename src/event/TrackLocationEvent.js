const { Cache } = require("memory-cache");
const { handelDashboardSocketDebug } = require("./SocketDashboardDebugEvent");


function handleTrackDriver (socket , io) {

    return (data) =>{

        socket.to(data.room).emit('track_driver',data.data);

        if(data.data.order_status == 'start'){
          const cache_key_name  = 'track_points_' + data.data.order_id;
          if (Cache.get(cache_key_name)) {
            Cache.put(cache_key_name, Cache.get(cache_key_name) +'|' +`${data.data.lat},${data.data.long}`);
          } else {
            Cache.put(cache_key_name, `${data.data.lat},${data.data.long}`);
          }
        }

        handelDashboardSocketDebug('track_driver' , socket.id , data.room , data , io)
    }
}


module.exports = {handleTrackDriver}