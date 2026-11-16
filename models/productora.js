const {Schema, model} = require('mongoose')

const productoraSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'nombre de la productora'],
        unique: true
    },
    estado: {
        type: String,
        required: true,
        default: 'Activo',
        enum: ['Activo', 'Inactivo']
    },
    slogan: {
        type: String,
        default: [true, 'Slogan']
    },
    descripcion: {
        type: String,
        default: [true, 'descripcion obligatoria']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('productoras', productoraSchema)