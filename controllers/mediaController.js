const { crearTipo } = require("./tipoController");

let medias = [
    {
        id: 1,
        serial: 'PEL-001',
        titulo: 'Inception',
        sinopsis: 'Un ladrón que roba secretos corporativos a través del uso de la tecnología de intercambio de sueños.',
        url: 'https://ejemplo.com/inception',
        fotoPortada: 'https://ejemplo.com/portada-inception.jpg',
        anoEstreno: 2010,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
        genero: { id: 3, nombre: 'Ciencia Ficción' },
        director: { id: 1, nombres: 'Christopher Nolan' },
        productora: { id: 1, nombre: 'Warner Bros' },
        tipo: { id: 1, nombre: 'Película' }
    }
];

//obtemer medias
const obtenerMedias = (req, res) => {
    res.json(medias);
};

//crear nueva medias
const crearMedia = (req, res) => {
    const {serial, titulo, sinopsis, url, fotoPortada, anoEstreno, genero, director, productora, tipo} = req.body;

    const nuevaMedia = {
    id: medias.length + 1,
        serial,
        titulo,
        sinopsis,
        url,
        fotoPortada,
        anoEstreno,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
        genero,
        director,
        productora,
        tipo
    };

    medias.push(nuevaMedia);
    res.status(201).json({
    mensaje: "media registrada con exito",
    media: nuevaMedia
    });

};

module.exports = {
    obtenerMedias,
    crearMedia
}

