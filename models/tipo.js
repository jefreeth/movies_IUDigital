const { Schema, model} = require('mongoose')

const tipoSchema = Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        enum: ['pelicula', 'serie'],
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        default: 'Activo',
        enum: ['Activo', 'Inactivo']
    },
    fechaCreacion:{
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        defaullt: Date.now
    }
});

module.exports = model('tipo', tipoSchema);