//const auth = require('.');

const TABLA = 'auth';

module.exports = function(dbInyectada){

    let db = dbInyectada;

    if (!db){
        db=require('./../../src/DB/mysql')
    }
    
    function agregar(data){
        /*const authData = {
            id: data.id
        }*/

        const authData = {};

        if(data.id){
            authData.id = data.id;
        }

        if(data.usuario){
            authData.usuario = data.usuario;
        }

        if(data.password){
            authData.password = data.password;
        }

        console.log(data)

        return db.agregar(TABLA, authData);
    }


    return  { agregar,  }

}
