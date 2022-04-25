const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Detalle_sensorFields = {
    sensorId: {
        require: true,
        type: Number
    },
    valores: {
        require: true,
        type: [{}]
    } 
}

var Detalle_sensorSchema = new Schema(Detalle_sensorFields,{timestamps:true});

module.exports = {
    Detalle_sensor: mongoose.model('Detalle_sensor',Detalle_sensorSchema)
}