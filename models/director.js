const {Schema, model} = require('mongoose');

const directorSchema = Schema ({
    nombre:{
        type: String,
        required:[true, 'nombre obligatorio']
    },
    estado: {
        type: String,
        required: true,
        default: 'Activo',
        enum:['Activo', 'Inactivo']
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

module.exports = model('director', directorSchema);