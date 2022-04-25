const mongoose = require('mongoose')

const Schema = mongoose.Schema

const THFields = {
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

var THSchema = new Schema(THFields,{timestamps:true});

module.exports = {
    TH: mongoose.model('TH',THSchema)
}
