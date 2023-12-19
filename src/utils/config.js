const MAIN_BACKEND_URL  = 'http://localhost:8000/api/'


const PREFIX_DRIVER  = 'driver/'
const PREFIX_CUSTOMER  = 'customer/'

 const accepteOrder  = PREFIX_DRIVER +'accept_order';

 const Waiting  = PREFIX_DRIVER +'waiting';
 const TrackDriver  = PREFIX_DRIVER +'track_driver';
 const Pickup  = PREFIX_DRIVER +'pickup';
 const Arrived  = PREFIX_DRIVER +'arrived';


 const Cancel =  PREFIX_CUSTOMER + 'cancel'

 const OnMyWay =  PREFIX_CUSTOMER + 'on_my_way' 

 var currentUser = [];




 module.exports = {Arrived, Cancel , Pickup  , OnMyWay , TrackDriver ,Waiting , accepteOrder , MAIN_BACKEND_URL , currentUser}
