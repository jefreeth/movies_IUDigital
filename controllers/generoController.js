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
        const genero = new generos({nombre, estado, descripcion})
        
        //guardamos en la base de datos
        await genero.save();

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

module.exports = {
    obtenerGeneros,
    crearGenero
};
