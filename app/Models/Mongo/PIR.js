const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PIRFields = {
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

var PIRSchema = new Schema(PIRFields,{timestamps:true});

module.exports = {
    PIR: mongoose.model('PIR',PIRSchema)
}
