const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ValoresFields = {
    _id: {
        type: String,
        require: true
    },
    sensorID: {
        type: Number,
        require: true
    },
    Valores: {
        type: [],
        require: true,
    },
    fecha: {
        type: String,
        require: true
    },
    hora: {
        type: String,
        require: true
    }
}
var ValoresSchema = new Schema(ValoresFields, {timestamps:true});

module.exports = {
    Valor: mongoose.model('us', ValoresSchema)
}