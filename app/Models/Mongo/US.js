const mongoose = require('mongoose')

const Schema = mongoose.Schema

const USFields = {
    sensorID: {
        require: true,
        type: Number
    },
    valores: {
        require: true,
        type: [{}]
    },
    fecha: {
        require: true,
        type: String
    },
    hora: {
        require: true,
        type: String
    }
}

var USSchema = new Schema(USFields,{timestamps:true});

module.exports = {
    US: mongoose.model('US',USSchema)
}
