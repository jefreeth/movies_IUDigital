const director = require('../models/director');

//obtemer los directores
const obtenerDirector = async (req, res) => {
    try {
        const directores = await director.find();
        res.json(directores)
    } catch (error) {
        console.log(eror);
        res.status(500).json({
            mensaje: 'error al obtener los directores'
        });
    }
}

//crear un nuevo director
const crearDirector = async (req, res) => {
    const {nombre} = req.body;

    try{
        //creamos una nueva instancia del modelo
        const directores = new director({nombre})

        //guardamos en la base de datos
        await directores.save()

        res.status(200).json({
            mensaje:'director creado correctamente', director
        })

    }catch (error){
        console.log(error);
        res.status(500).json({
            mensaje: 'error al crear director'
        });
    };
};

module.exports = {
    obtenerDirector,
    crearDirector
};
