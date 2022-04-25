const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const fields = [
//  'nombre'
// ]

const SensoresFields = {
    _id: {
        require: true,
        type: Number
    },
    nombre: {
        require: true,
        type: String
    },
    pin:[{
        require: true,
        type: Number
    }],
    tipo: {
        require: true,
        type: String
    }
}

var SensoresSchema = new Schema(SensoresFields,{timestamps:true});

module.exports = {
    Sensores: mongoose.model('Sensores',SensoresSchema)
}
