const genero = require('../models/genero');

//obtener todos los generos
const obtenerGeneros = async (req, res) => {
    try {
        const generos = await genero.find();
        res.json(generos);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'error al obtener generos'
        });
    }
};

//crear un nuevo genero
const crearGenero = async (req, res) => {
    const {nombre, estado, descripcion } = req.body;

    try {
        //creamos una instancia del modelo con los datoa de petecion
        const generos = new genero({nombre, estado, descripcion})
        
        //guardamos en la base de datos
        await generos.save();

        res.status(200).json({
            mensaje: 'genero guardado correctamente', genero
        });

    }catch (error){
        console.log(error);
        res.status(500).json({
            mensaje: 'error el guardar genero'
        });
    };    
};

//actualizar genero
const actualizarGenero = async (req, res) => {
    try{
        //capturart el id de la url
        const { id} = req.params;
        const datosActualizados = req.body;

        //buscamos por id y actualizamos
        const generoActualizado = await genero.findByIdAndUpdate( id, datosActualizados, {returnDocument: 'after'});

        if (!generoActualizado){
            return res.status(400).json({
                mensaje: 'genero no encontrado'
            });
        }
        res.json(generoActualizado)
    }catch (error){
        res.status(500).json({
            mensaje:'error al actualizar el genero', error
        });
    }
};

//eliminar genero
const eliminarGenero = async (req, res) => {
    try{
        //capturamos el id de la url
        const { id} = req.params;
        const generoEliminado = await genero.findByIdAndDelete(id);

        if (!generoEliminado){
            return res.status(400).json({
                mensaje: 'genero no encontrado'
            });
        }
        res.json({
            mensaje:'genero eliminado'
        });
    }catch (error){
        rees.status(500).json({
            mensaje: 'errror al eliminar genero', error
        });
    }
};

module.exports = {
    obtenerGeneros,
    crearGenero,
    actualizarGenero,
    eliminarGenero
};
