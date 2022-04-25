'use strict'
const mongoose = require('mongoose')
const Valor = use('App/Models/Mongo/Temperatura')

class TemperaturaMongoController {
     //---------------------->Consultar Todo<----------------------//
  async index({ response }) {  
    await mongoose.connect('mongodb://frell:frell*341@3.93.99.37:27017/sensor_box')
    const prueba  = await Valor.Valor.aggregate([
      { 
        $unwind : "$valores" 
      },
      {
        $unwind : "$valores.temperatura"
      },
      {
        $project: {
          Temperatura : "$valores.temperatura",
          Fecha: "$fecha",
          Hora: "$hora",
          Created_At: "$createdAt",
          Updated_At: "$updatedAt"
        }
      }
    ])
    
    return response.json({
      status: true,
      mensaje: "Se obtuvieron las Temperaturas A",
      data: prueba
    })
    
  }

  //---------------------->Máximo<----------------------//
  async tempalta({response}){
    const max = await Valor.Valor.aggregate([
        { 
            $unwind : "$valores" 
        },
        {
          $unwind : "$valores.temperatura"
        },
        {
          $group: {
            _id: null,
            Maxima: {$max: "$valores.temperatura"}
          }
        },
        {
          $lookup:{
            "from": "sensores",
            "localField": "valores.sensorID",
            "foreignField": "sensores._id",
            "as": "Sensor",
          }
        },
        {
          $unwind: "$Sensor"
        },
        {
          $match: { //Etapa para buscar (símilar al find)
              "Sensor.tipo": 'TH' //Campo de búsqueda
          }
        },
        {
          $project: {
            Maxima : 1,
            Sensor: 1
          }
        }
        ])
        return response.json({
          status: true,
          mensaje: "Se obtuvo el valor más alto del sensor de Temperatura",
          data: max
        })
        //Se obtuvo el valor más alto del sensor ultrasónico
  }

  //---------------------->Mínimo<----------------------//
  async tempbaja({response}){
    const min = await Valor.Valor.aggregate([
        { 
            $unwind : "$valores" 
        },
        {
          $unwind : "$valores.temperatura"
        },
        {
          $group: {
            _id: null,
            Minima: {$min: "$valores.temperatura"}
          }
        },
        {
          $lookup:{
            "from": "sensores",
            "localField": "valores.sensorID",
            "foreignField": "sensores._id",
            "as": "Sensor",
          }
        },
        {
          $unwind: "$Sensor"
        },
        {
          $match: { //Etapa para buscar (símilar al find)
              "Sensor.tipo": 'TH' //Campo de búsqueda
          }
        },
        {
          $project: {
            Minima : 1,
            Sensor: 1
          }
        }
        ])
        return response.json({
          status: true,
          mensaje: "Se obtuvo el valor más bajo del sensor de Temperatura",
          data: min
        })
        //Se obtuvo el valor más alto del sensor ultrasónico
  }

  //---------------------->Promedio<----------------------//
  async promedio({response}){
    const promedio = await Valor.Valor.aggregate([
        { 
            $unwind : "$valores" 
        },
        {
          $unwind : "$valores.temperatura"
        },
        {
          $group: {
            _id: null,
            Promedio: {$avg: "$valores.temperatura"}
          }
        },
        {
          $lookup:{
            "from": "sensores",
            "localField": "valores.sensorID",
            "foreignField": "sensores._id",
            "as": "Sensor",
          }
        },
        {
          $unwind: "$Sensor"
        },
        {
          $match: { //Etapa para buscar (símilar al find)
              "Sensor.tipo": 'TH' //Campo de búsqueda
          }
        },
        {
          $project: {
            Promedio : 1,
            Sensor: 1
          }
        }
    ])

    return response.json({
      status: true,
      mensaje: "Se obtuvo el promedio de Temperaturas",
      data: promedio
    })

  }
}

module.exports = TemperaturaMongoController
