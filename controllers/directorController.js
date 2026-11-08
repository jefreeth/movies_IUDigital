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

//actualizar director
const actualizarDirector = async (req, res) => {
    try{
        const {id} = req.params;
        const datosActualizados = req.body;

        datosActualizados.fechaActualizacion = Date.now();

        const directorActulizado = await director.findByIdAndUpdate(id, datosActualizados, {returnDocument: 'after'});

        if (!directorActulizado){
            return res.status(400).json({
                mensaje: 'director no encontrado'
            })
        }
        res.json(directorActulizado);

    }catch (error){
        console.log(error)
        res.status(500).json({
            mensaje: 'error al actualizar el director', error
        });
    }
};

//eliminar director
const eliminarDirector = async (req, res) => {
    try{
        const {id} = req.params;
        const directorEliminado = await director.findByIdAndDelete(id);

        if (!directorEliminado){
            return res.status(400).json({
                mensaje: 'director no econtrado'
            });
        }
        res.json({
            mensaje: 'director eliminado correctamente'
        });

    }catch (error){
        console.log(error)
        res.status(500).json({
            mensaje: 'error al eliminar director', error
        });
    }
};

module.exports = {
    obtenerDirector,
    crearDirector,
    actualizarDirector,
    eliminarDirector
};
