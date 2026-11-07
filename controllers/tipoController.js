const tipo = require('../models/tipo')

//obtener los tipos
const obtenerTipos = async (req, res) => {
    try {
        const tipos = await tipo.find();

        res.status(200).json(tipos);

    }catch (error){
        console.log (error);
        res.status(500).json({
            mensaje:'error al obtener los tipos'
        });
    }
};

//crear los tipos
const crearTipo = async (req, res) => {
    try {
        const tipos = [{
            nombre: 'pelicula',
            descripcion: 'contenido cinematrografico'
        },
        {
            nombre: 'serie',
            descripcion: 'contenido organizado por capitulos'
        }    
    ];

    const resultado = await tipo.insertMany(tipos);

    res.status(200).json({
        mensaje:'tipos creado correctamente', tipos: resultado
    });

    }catch (error) {
        console.log(error);
        res.status(500).json({
            meensaje:'error al crear los tipos', error
        })
    }
}

module.exports = {
    obtenerTipos,
    crearTipo
}