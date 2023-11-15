const express = require ('express');
const respuesta=require('../../src/red/respuestas');

const router = express.Router();
const controlador = require('./index');

//Rutas
router.get('/',todos);
router.get('/:id', uno);
router.put('/', eliminar);
router.post('/', agregar)

//Funcionalidad
async function todos(req, res, next) {    
    try{
        const items = await controlador.todos()
        respuesta.success(req, res, items, 200);
    } catch (err){next(err);}

    //} catch (err){respuesta.error(req, res, err)}
};
async function uno(req, res, next) {
    try{
        const items = await controlador.uno(req.params.id)
        respuesta.success(req, res, items, 200);
    } catch (err){next(err);}

    //} catch (err){respuesta.error(req, res, err);}
};
async function eliminar(req, res, next) {
    try{
        const items = await controlador.eliminar(req.body)
        respuesta.success(req, res, items, 200);
    } catch (err){next(err);}

    //} catch (err){respuesta.error(req, res,'Item eliminado satisfactoriamente', err);}
    //En caso que tire errores raros, revisar esto, middleware/errors, red/errors, app y mensaje
    //También se debería sacar la variable next()


};

async function agregar(req, res, next) {
    try{
        const items = await controlador.agregar(req.body)
        if(req.body.id == 0){
            mensaje = 'Item guardado con éxito';
        } else {
            mensaje = 'Item actualizado con éxito';
        }
        respuesta.success(req, res, items, 201);
    } catch (err){next(err);}
};


module.exports = router;