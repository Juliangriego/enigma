const TABLA = 'tb_formulario';

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
    
    function agregar(data){
        return db.agregar(TABLA, data);
    }
    
    function eliminar (data){
        return db.eliminar(TABLA, data);
    }

    return  {todos, uno, agregar, eliminar}

}
