const media = require('../models/media')

//obtemer medias
const obtenerMedias = async (req, res) => {
    try {
        const medias = await media.find()
            .populate('generoPrincipal')
            .populate('director')
            .populate('productora')
            .populate('tipo')
            
        res.json(medias);
    }catch (error){
        console.log(error);
        res.status(500).json({
            mensaje: 'error al obtener las medias', error
        });
    }
};

//crear nueva medias
const crearMedia = async (req, res) => {
    const {serial, titulo, sipnosis, url, fotoPortada, anoEstreno, genero, director, productora, tipo} = req.body;

    try {
        const medias= new media(req.body)

        //guardamos en la base de datos
        await medias.save();

        res.status(200).json({
            mensaje: 'media creada correctamente', media
        });

    }catch (error){
        console.log(error);
        res.status(500).json({
            mensaje:'error al crear media', error
        });
    };
};

module.exports = {
    obtenerMedias,
    crearMedia
}

