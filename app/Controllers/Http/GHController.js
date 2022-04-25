'use strict'
const mongoose = require('mongoose')
const {GH} = use('App/Models/Mongo/GH')

class GHController {
    async index({ response }) {

        //Consulta Todo
          // await mongoose.connect('mongodb://localhost:27017/Login')
          const otro  =await GH.find({})

          return response.json({
            status: true,
            mensaje: "Se obtuvieron los valores del sensor de gas y humo",
            data: otro
          })

      }
      async store ({ request, response, session }) {


        const otro =request.only(['sensorID','valores', 'fecha', 'hora'])
        const crear =await GH.create(otro)
    //     const dsensor =request.input("GH")
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
          mensaje:"Se guardaron los valores del sensor de gas y humo",
          data: crear
      })


  }
}

module.exports = GHController
