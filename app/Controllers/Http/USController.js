'use strict'
const mongoose = require('mongoose')
const {US} = use('App/Models/Mongo/US')

class USController {
    async index({ response }) {

        //Consulta Todo
          // await mongoose.connect('mongodb://localhost:27017/Login')
          const otro  =await US.find({})

          return response.json({
            status: true,
            mensaje: "Se obtuvieron los valores del sensor ultrasonico",
            data: otro
          })

      }
      async store ({ request, response, session }) {


        const otro =request.only(['sensorID','valores', 'fecha', 'hora'])
        const crear =await US.create(otro)
    //     const dsensor =request.input("US")
    //     dsensor.forEach(element => {
    //       try {
    //           const otro = new Sensores({
    //             sensorId: element.sensorId,
    //             valores: element.valores,
    //             //   type: element.type,
    //             //   fecha: element.fecha,
    //             //   hora: element.hora
    //           })
    //           otro.save()
    //       } catch(err) {
    //           console.log(err);
    //       }

    //   });
      return response.ok({
          status:true,
          mensaje:"Se guardaron los valores del sensor ultrasonico",
          data: crear
      })


  }
}

module.exports = USController
