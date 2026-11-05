const {Schema, model} = require('mongoose');

const generoShema = Schema({
    nombre: {
        type: String,
        required: [true, 'nombre obligatorio'],
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
        default: ''
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