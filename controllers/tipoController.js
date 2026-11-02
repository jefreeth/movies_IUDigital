//simulamos base de datos
let tipos = [
    { id: 1, nombre: 'Película', fechaCreacion: new Date(), fechaActualizacion: new Date(), descripcion: 'Largometraje audiovisual' },
    { id: 2, nombre: 'Serie', fechaCreacion: new Date(), fechaActualizacion: new Date(), descripcion: 'Producción audiovisual por episodios' }
];

//obtener tipos
const obtenerTipos = (req, res) => {
    res.json(tipos);
};

//creat nuevo tipo
const crearTipo = (req, res) => {
    const {nombre, descripcion} = req.body;

    const nuevoTipo = {
        id: tipos.length + 1,
        nombre,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
        descripcion: descripcion || ''
    };

    tipos.push(nuevoTipo);
    res.status(201).json({
        mensaje: "el tipo creado con exito",
        tipo: nuevoTipo
    });
};

module.exports = {
    obtenerTipos,
    crearTipo
}