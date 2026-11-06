const {Schema, model} = require('mongoose')

const prodcutoraSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'nombre obligatorio'],
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
        default: ''
    },
    descripcion: {
        type: String,
        default: ''
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

module.exports = model('productoras', prodcutoraSchema)