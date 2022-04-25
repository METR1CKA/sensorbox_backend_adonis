'use strict'
const mongoose = require('mongoose')
const Valor = use('App/Models/Mongo/UltrasonicoMongo')

class UltrasonicoMongoController {
    async index({response}){
        await mongoose.connect('mongodb://frell:frell*341@3.93.99.37:27017/sensor_box')
        const data = await Valor.Valor.aggregate([
          { 
            $unwind : "$valores" 
          },
          {
            $unwind : "$valores.distancia"
          },
          {
            $project: {
              Distancia : "$valores.distancia",
              Fecha: "$fecha",
              Hora: "$hora",
              Created_At: "$createdAt",
              Updated_At: "$updatedAt"
            }
          }
        ])
        return response.json({
            status:true,
            mensaje:"Se obtuvieron los datos",
            data: data
        })
    }
    //------------------------->Máximo valor<-------------------------//
    async ultraalta ({ response }) {
        const max = await Valor.Valor.aggregate([
          { 
            $unwind : "$valores" 
          },
          {
            $unwind : "$valores.distancia"
          },
          {
            $group: {
              _id: null,
              Alta: {$max: "$valores.distancia"}
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
                "Sensor.tipo": 'US' //Campo de búsqueda
            }
          },
          {
            $project: {
              Alta : 1,
              Sensor: 1
            }
          }
        ])
        
        return response.json({
          status: true,
          mensaje: "Se obtuvo el valor más alto del sensor ultrasónico",
          data: max
        })
       //Se obtuvo el valor más alto del sensor ultrasónico
    }

    //---------------------->Mínimo<----------------------//
  async ultrabaja({response}){
    const min = await Valor.Valor.aggregate([
      { 
        $unwind : "$valores" 
      },
      {
        $unwind : "$valores.distancia"
      },
      {
        $group: {
          _id: null,
          Baja: {$min: "$valores.distancia"}
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
          Baja : 1,
          Sensor: 1
        }
      }
        ])
        return response.json({
          status: true,
          mensaje: "Se obtuvo el valor más bajo del sensor Ultrasónico",
          data: min
        })
        //Se obtuvo el valor más alto del sensor ultrasónico
  }

  //---------------------->Promedio<----------------------//
  async promediou({response}){
    const promedio = await Valor.Valor.aggregate([
      { 
        $unwind : "$valores" 
      },
      {
        $unwind : "$valores.distancia"
      },
      {
        $group: {
          _id: null,
          Promedio: {$avg: "$valores.distancia"}
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
      mensaje: "Se obtuvo el promedio",
      data: promedio
    })

  }
}

module.exports = UltrasonicoMongoController
