// base de datos simulada
let directores = [
    { id: 1, nombres: 'Christopher Nolan', estado: 'Activo', fechaCreacion: new Date(), fechaActualizacion: new Date() },
    { id: 2, nombres: 'Steven Spielberg', estado: 'Activo', fechaCreacion: new Date(), fechaActualizacion: new Date() }
];


//obtemer los directores
const obtenerDirector = (req, res) => {
    res.json(directores)
}

//crear un nuevo director
const crearDirector = (req, res) => {
    const {nombres, estado} = req.body;

    const nuevoDirector = {
        id: directores.length +1,
        nombres,
        estado: estado || 'Activo',
        fechaCreacion: new Date(),
        fechaActualizacion: new Date()
    };

    directores.push(nuevoDirector);
    res.status(201).json({
        mensaje: "director creado con exito",
        director: nuevoDirector
    });
    
};

module.exports = {
    obtenerDirector,
    crearDIrector
}

