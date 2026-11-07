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
        default: [true, 'slogan obligatorio']
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

module.exports = model('productoras', prodcutoraSchema)