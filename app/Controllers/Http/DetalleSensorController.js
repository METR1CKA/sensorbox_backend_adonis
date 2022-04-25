'use strict'
const mongoose = require('mongoose')
const {Detalle_sensor} = use('App/Models/Mongo/Detalle_Sensor')

class DetalleSensorController {
    async index({ response }) {

        //Consulta Todo
          // await mongoose.connect('mongodb://localhost:27017/Login')
          const otro  =await Detalle_sensor.find({})
        
          return response.json({
            status: true,
            mensaje: "Se obtuvieron los Detalle Sensores",
            data: otro
          })
        
      }
      async store ({ request, response, session }) {
       

        const otro =request.only(["sensorId","valores"])
        const crear =await Detalle_sensor.create(otro)
    //     const dsensor =request.input("Detalle_Sensor") 
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
          message:"Se guardaron los detalles de los sensores",
          data: crear
      })
      
  
  }
}     

module.exports = DetalleSensorController
