//simulamos una bade de datos temporal en memoria
let generos = [
    { id: 1, nombre: 'Acción', estado: 'Activo', fechaCreacion: new Date(), fechaActualizacion: new Date(), descripcion: 'Películas de acción y adrenalina' },
    { id: 2, nombre: 'Aventura', estado: 'Activo', fechaCreacion: new Date(), fechaActualizacion: new Date(), descripcion: 'Películas de exploración y viajes' },
    { id: 3, nombre: 'Ciencia Ficción', estado: 'Activo', fechaCreacion: new Date(), fechaActualizacion: new Date(), descripcion: 'Tecnología, espacio y futuro' },
    { id: 4, nombre: 'Drama', estado: 'Activo', fechaCreacion: new Date(), fechaActualizacion: new Date(), descripcion: 'Historias emotivas y profundas' },
    { id: 5, nombre: 'Terror', estado: 'Activo', fechaCreacion: new Date(), fechaActualizacion: new Date(), descripcion: 'Sususto y miedo' }
];

//obtener todos los generos
const obtenerGeneros = (req, res) => {
    res.jason(generos);
};

//crear un nuevo genero
const crearGenero = (req, res) => {
    const {nombre, estado, descripcion } = req.body;

    const nuevoGenero = {
        id: generos.length + 1,
        nombre,
        estado: estado || 'Activo',
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
        descripcion: descripcion || ''
    };

    generos.push(nuevoGenero);
    res.status(201).jason({
        mensaje: 'genero guardado correctamente',
        genero: nuevoGenero
    });

};

module.exports = {
    obtenerGeneros,
    crearGenero
};
