'use strict'
const Valor = use('App/Models/Mongo/PresenciaMongo')
const mongoose = require('mongoose')
class PresenciaMongoController {
    async index({ response }) {  
        await mongoose.connect('mongodb://frell:frell*341@3.93.99.37:27017/sensor_box')
        const prueba  = await Valor.Valor.aggregate([
          { 
            $unwind : "$valores" 
          },
          {
            $unwind : "$valores.presencia"
          },
          {
            $project: {
              Presencia : "$valores.presencia",
              Fecha: "$fecha",
              Hora: "$hora",
              Created_At: "$createdAt",
              Updated_At: "$updatedAt"
            }
          }
        ])
        
        return response.json({
          status: true,
          mensaje: "Se obtuvieron los datos de precensia.",
          data: prueba
        })
        
      }
    async detallesPresencias({response}){
        
        let hoy = new Date();
        let day = hoy.getDate();
        let month = hoy.getMonth() + 1;
        let year = hoy.getFullYear();

        day = ('0' + day).slice(-2);
        month = ('0' + month).slice(-2);
        
        const formato = `${day}-${month}-${year}`

        const pruebaPIR = await Valor.Valor.aggregate([
             {
                 $match: {
                     "fecha": formato.toString()
                 }
             },
             {
                 $unwind: "$valores"
             },
             {
                $unwind: "$valores.presencia" 
             },
             {
                 $match: {
                     "valores.presencia": 'Se detecto presencia'
                 }
             },

             {
                 $project: {
                    hora: 1,
                    fecha: 1,
                    valores: "$valores.presencia"
                 }
             }
        ])


        return response.json({
            status:true,
            mensaje:"Se obtuvo la cantidad de presencias de hoy",
            data: pruebaPIR
        })

    }
    
    async cantidadPresencias({response}){
        let hoy = new Date();
        let day = hoy.getDate();
        let month = hoy.getMonth() + 1;
        let year = hoy.getFullYear();

        day = ('0' + day).slice(-2);
        month = ('0' + month).slice(-2);
        
        const formato = `${day}-${month}-${year}`

        const pruebaPIR = await Valor.Valor.aggregate([
             {
                $match: {
                    "fecha": formato.toString()
                }
             },
             {
                $unwind: "$valores"
             },
             {
                $match: {
                    "valores.presencia": 'Se detecto presencia'
                }
             },
             {
                $count: "Cantidad"
            },
            {
                $project: {
                   Cantidad: 1
                }
            }
        ])

        return response.json({
            status:true,
            mensaje:"Se obtuvo la cantidad de presencias de hoy",
            data: pruebaPIR
        })
    }
}

module.exports = PresenciaMongoController
