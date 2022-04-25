const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GHFields = {
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

var GHSchema = new Schema(GHFields,{timestamps:true});

module.exports = {
    GH: mongoose.model('GH',GHSchema)
}
