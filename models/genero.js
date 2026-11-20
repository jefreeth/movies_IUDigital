const {Schema, model} = require('mongoose');

const generoShema = Schema({
    nombre: {
        type: String,
        required: [true, 'nombre del genero'],
        unique: true
    },
    estado:{
        type: String,
        required: true,
        default: 'Activo',
        enum: ['Activo', 'Inactivo']
    },
    descripcion: {
        type: String,
        default: [true, 'descripcion']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion:{
        type: Date,
        default: Date.now
    }
});

module.exports = model('genero', generoShema);