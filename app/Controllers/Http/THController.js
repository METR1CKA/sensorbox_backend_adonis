'use strict'
const mongoose = require('mongoose')
const {TH} = use('App/Models/Mongo/TH')

class THController {
    async index({ response }) {

        //Consulta Todo
          // await mongoose.connect('mongodb://localhost:27017/Login')
          const otro  =await TH.find({})

          return response.json({
            status: true,
            mensaje: "Se obtuvieron los valores del sensor de temperatura y humedad",
            data: otro
          })

      }
      async store ({ request, response, session }) {


        const otro =request.only(['sensorID','valores', 'fecha', 'hora'])
        const crear =await TH.create(otro)
    //     const dsensor =request.input("TH")
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
          mensaje:"Se guardaron los valores del sensor de temperatura y humedad",
          data: crear
      })

  }

}

module.exports = THController
