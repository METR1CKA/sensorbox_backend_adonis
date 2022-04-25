'use strict'
const mongoose = require('mongoose')
const {Sensores} = use('App/Models/Mongo/Sensores')
class SensoresEjemploController {
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
       


        const sensor =request.input("sensores") 
        sensor.forEach(element => {
          try {
              const otro = new Sensores({
                  nombre: element.nombre,
                  pin: element.pin,
                  type: element.type,
                  fecha: element.fecha,
                  hora: element.hora
              })
              otro.save()
          } catch(err) {
              console.log(err);
          }
         
      });
      return response.ok({
          status:true,
          message:"Se guardaron los datos",
          data: {}
      })
      
  }catch(error){
      console.log(error);
  }
}     
        // const sensor =request.only(["nombre","pin","type","fecha","hora"])
        // const otro =await Sensores.create(sensor)
        // await sensor.save

module.exports = SensoresEjemploController
