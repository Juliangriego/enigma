const TABLA = 'usuarios';
const auth = require('../auth')

module.exports = function(dbInyectada){

    let db = dbInyectada;

    if (!db){
        db=require('./../../src/DB/mysql')
    }

    function todos(){  
        return db.todos(TABLA);
    }
    
    function uno(id){
        return db.uno(TABLA, id);
    }
    
    async function agregar(data){ //en el video la variable es "body"
        const usuario = {
            id: data.id,
            nombre: data.nombre,
            activo: data.activo
        }
        const respuesta = await db.agregar(TABLA, usuario); //Cuando se agrega el registro necesitamos que nos devuelva el Id
        var insertID = 0;
        
        if (data.id === 0){ //Si el usuario ingresa un id 0 es porque es un registro nuevo (en verdad en mysql.js terminé poniendo un booleano para esa comparación). Actualizo: no usa más booleano
            //insertID = respuesta.insertID //En caso que sea un registro nuevo, guardamos en insertID el ID de la respuesta
            insertID = usuario.id //Debería ser respuesta.id, ¿No?
        } else {
            insertID = data.id; //En caso que sea una actualización, guardamos en insertID lo que nos mandó el usuario
        }

        console.log()//---> ¿LA BD NO ESTÁ DEVOLVIENDO ID?


        //Ahora agregamos o actualizamos la contraseña o usuario
        if  (data.usuario || data.password){
            await auth.agregar({
                id: insertID,
                usuario: data.usuario,  
                password: data.password
            })
        }

        return true;
    }
    
    function eliminar (data){
        return db.eliminar(TABLA, data);
    }

    return  {todos, uno, agregar, eliminar}

}
