'use strict'
const mongoose = require('mongoose')
const Valor = use('App/Models/Mongo/Temperatura')

class HumedadMongoController {

    //----------------->Consultar Todo<-----------------//
    async index({response}) {
        await mongoose.connect('mongodb://frell:frell*341@3.93.99.37:27017/sensor_box')
        const todo  = await Valor.Valor.aggregate([
          { 
            $unwind : "$valores" 
          },
          {
            $unwind : "$valores.humedad"
          },
          {
            $project: {
              Temperatura : "$valores.humedad",
              Fecha: "$fecha",
              Hora: "$hora",
              Created_At: "$createdAt",
              Updated_At: "$updatedAt"
            }
          }
        ])

        return response.json({
            status: true,
            mensaje: "Se obtuvieron los datos",
            data: todo
        })
    }

    //---------------------->Máximo<----------------------//
    async humalta({response}){
          const max = await Valor.Valor.aggregate([
          { 
            $unwind : "$valores" 
          },
          {
            $unwind : "$valores.humedad"
          },
          {
            $group: {
              _id: null,
              ValorMaximo: {$max: "$valores.humedad"}
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
              ValorMaximo : 1,
              Sensor: 1
            }
          }
        ])
        return response.json({
            status: true,
            mensaje: "Se obtuvo el valor más alto de Humedad",
            data: max
        })
    }

     //---------------------->Mínimo<----------------------//
  async humbaja({response}){
    const min = await Valor.Valor.aggregate([
      { 
        $unwind : "$valores" 
      },
      {
        $unwind : "$valores.humedad"
      },
      {
        $group: {
          _id: null,
          ValorMinimo: {$min: "$valores.humedad"}
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
          ValorMinimo : 1,
          Sensor: 1
        }
      }
        ])
        return response.json({
          status: true,
          mensaje: "Se obtuvo el valor más bajo del sensor de Humedad",
          data: min
        })
  }

  //---------------------->Promedio<----------------------//
  async promedioh({response}){
    const promedio = await Valor.Valor.aggregate([
      { 
        $unwind : "$valores" 
      },
      {
        $unwind : "$valores.humedad"
      },
      {
        $group: {
          _id: null,
          promedio: {$avg: "$valores.humedad"}
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
          promedio : 1,
          Sensor: 1
        }
      }
    ])

    return response.json({
      status: true,
      mensaje: "Se obtuvo el promedio de Humedades",
      data: promedio
    })

  }

}

module.exports = HumedadMongoController
