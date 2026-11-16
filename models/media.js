const {Schema, model} = require('mongoose')

const mediaSchema = Schema({
    serial: {
        type: String,
        required:[true, 'serial unico'],
        unique:true
    },
    titulo: {
        type:String,
        required:[true, 'titulo']
    },
    sipnosis: {
        type: String,
        required:[true, 'sipnosis']
    },
    urlPelicula:{
        type:String,
        required: [true, 'url'],
        unique: true
    },
    imagenPortada:{
        type:String,
        required: [true, 'imagen de portada']
    },
    anioEstreno:{
        type: Number,
        required: [true, 'anio de estreno']
    },
    generoPrincipal:{
        type: Schema.Types.ObjectId,
        ref: 'genero',
        required: [true, 'genero principal']
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'director',
        required:[true, 'director']
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'productoras',
        required: [true, 'productora']
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'tipo',
        required: [true, 'tipo']
    },
    fechaCreacion: {
        type: Date,
        deefault: Date.now
    },
    fechaActualizacion: {
        type:Date,
        default: Date.now
    }
});

module.exports = model('media', mediaSchema)