const {Schema, model} = require('mongoose')

const mediaSchema = Schema({
    serial: {
        type: String,
        required:[true, 'el serial obligatorio'],
        unique:true
    },
    titulo: {
        type:String,
        required:[true, 'titulo obligatorio']
    },
    sipnosis: {
        type: String,
        required:[true, 'sipnosis obligatoria']
    },
    urlPelicula:{
        type:String,
        required: [true, 'url obligatoria'],
        unique: true
    },
    imagenPortada:{
        type:String,
        required: [true, 'iamgen obligatoria']
    },
    anoEstreno:{
        type: Number,
        required: [true, 'ano obligatorio']
    },
    generoPrincipal:{
        type: Schema.Types.ObjectId,
        ref: 'genero',
        required: [true, 'genero obligatorio']
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'director',
        required:[true, 'director obligatorio']
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'productoras',
        required: [true, 'productora obligatoria']
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'tipo',
        required: [true, 'tipo obligatorio']
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