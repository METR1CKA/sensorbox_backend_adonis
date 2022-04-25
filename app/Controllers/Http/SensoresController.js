'use strict'
const mongoose = require('mongoose')
const { Sensores } = use('App/Models/Mongo/Sensores')

class SensoresController {
     async index({ response }) {

        //Consulta Todo
          // await mongoose.connect('mongodb://localhost:27017/Login')
          const otro  =await Sensores.find({})

          return response.json({
            status: true,
            mensaje: "Se obtuvieron los Sensores",
            data: otro
          })

      }
      async store ({ request, response, session }) {



        const sensor =request.only(['_id', 'nombre', 'pin', 'tipo'])
        const guard =await Sensores.create(sensor)
      //  sensor.forEach(element => {
      //    try {
      //        const otro = new Sensores({
      //            _id: element._id,
      //            nombre: element.nombre,
      //            pin: element.pin,
      //            tipo: element.tipo
      //        })
      //        otro.save()
      //    } catch(err) {
      //        console.log(err);
      //    }
      //});
      return response.ok({
          status:true,
          message:"Se guardaron los datos",
          data: guard
      })

  }catch(error){
      console.log(error);
  }
}
        // const sensor =request.only(["nombre","pin","type"])
        // const otro =await Sensores.create(sensor)
        // await sensor.save

module.exports = SensoresController
