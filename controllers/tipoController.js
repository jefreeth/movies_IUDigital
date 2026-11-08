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
};
//actualizar tipo
const actualizarTipo = async (req, res) => {
    try{
        const {id} = req.params;
        const datosActualizados = req.body;
        datosActualizados.fechaActualizacion = Date.now();

        const tipoActualizado = await tipo.findByIdAndUpdate(id, datosActualizados, {returnDocument: 'after'});

        if (!tipoActualizado){
            return res.status(400).json({
                mensaje: 'tipo no encontrado'
            });
        }
        res.status(200).json({
            mensaje: 'tipo actualizado correctamente'
        });

    }catch (error){
        console.log(error);
        res.status(500).json({
            mensaje: 'error al actualizar el tipo', error
        });
    }
};
//eliminar tipo
const eliminarTipo = async (req, res) => {
    try{
        const {id} = req.params;
        const tipoEliminado = await tipo.findByIdAndDelete(id);

        if (!tipoEliminado){
            return res.status(400).json({
                mensaje: 'tipo no encontrado'
            });
        }
        res.status(200).json({
            mensaje: 'tipo eliminado correctamente'
        });
        
    }catch (error){
        console.log(error);
        res.status(500).json({
            mensaje: 'error al eliminar tipo', error
        });
    }
};

module.exports = {
    obtenerTipos,
    crearTipo,
    actualizarTipo,
    eliminarTipo
}