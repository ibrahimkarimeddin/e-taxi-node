const { OrderStatusEnum } = require("../utils/OrderStatusEnum");
const { handelDashboardSocketDebug } = require("./SocketDashboardDebugEvent");


function handleOrderStatus(socket , io){

    return async  (data)=>{
        socket.to(data.room).emit('order_status', data.data);  

        if(data?.data?.order_status == OrderStatusEnum.ACCEPTED){
            fetchFn.post(accepteOrder , {
              order_id:data.data.order_id,
              driver_id:data.data.driver_id,
            })
        }
    
        if(data?.data?.order_status == OrderStatusEnum.ON_MY_WAY){
          fetchFn.post(OnMyWay , {
            order_id:data.data.order_id,
            driver_id:data.data.driver_id,
            lat:data.data.lat,
            long:data.data.long,
          }  )
        }
    
        if(data?.data?.order_status == OrderStatusEnum.WATTING){
          fetchFn.post(Waiting , {
            order_id:data.data.order_id,
            driver_id:data.data.driver_id,
            lat:data.data.lat,
            long:data.data.long,
          }  )
        }
    
        if(data?.data?.order_status == OrderStatusEnum.START){
          fetchFn.post(Pickup , {
            order_id:data.data.order_id,
            driver_id:data.data.driver_id,
          }  )
        }
    
        if(data?.data?.order_status == OrderStatusEnum.COMPLETE){
    
          const cache_key_name = 'track_points_' + data.data.order_id;
          const track_point =  Cache.get(cache_key_name)
          Cache.del(cache_key_name)
          const fetchdata = await  fetchFn.post(Arrived , {
            order_id:data.data.order_id,
            driver_id:data.data.driver_id,
            lat:data.data.lat,
            long:data.data.long,
            km:data.data.km,
            track_point
          })
          
          const response  = await fetchdata.data
    
          const {order_id , final_price , paymeny_method , driver_cash_back , cash_back} = response
      
        
          const dataToSendInEvent =  {
            "order_id":order_id,
            "final_price":final_price,
            "paymeny_method":paymeny_method,
            "cash_back":cash_back,
            "driver_cash_back":driver_cash_back,
        }

          io.to('order.'+ order_id).emit('transaction_cost_event',dataToSendInEvent);

          handelDashboardSocketDebug('transaction_cost_event' , socket.id , data.room , dataToSendInEvent , io )
        }

    
        if(data?.data?.order_status == OrderStatusEnum.CANCELLED){
          fetchFn.post(Cancel , {
            order_id:data.data.order_id,
            driver_id:data.data.driver_id,
          } )
        } 
    
        handelDashboardSocketDebug('order_status' , socket.id , data.room , data , io)
    }
}


module.exports = {handleOrderStatus}