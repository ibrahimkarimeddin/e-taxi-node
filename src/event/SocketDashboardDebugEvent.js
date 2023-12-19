

function handelDashboardSocketDebug (event , socket_id , room , data  , io ){
    
    
        io.emit('dashboard_debug' , {
            event ,
            socket_id ,
            room , 
            data
        } )
}

module.exports = {handelDashboardSocketDebug}