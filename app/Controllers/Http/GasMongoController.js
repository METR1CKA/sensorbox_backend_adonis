'use strict'
const mongoose = require('mongoose')
const Valor = use('App/Models/Mongo/GasMongo')

class GasMongoController {
    async index({response}){
        const data = await Valor.Valor.aggregate([
            { 
              $unwind : "$valores" 
            },
            {
              $unwind : "$valores.gas o humo"
            },
            {
              $project: {
                Gas : "$valores.gas o humo",
                Fecha: "$fecha",
                Hora: "$hora",
                Created_At: "$createdAt",
                Updated_At: "$updatedAt"
              }
            }
          ])

        return response.json({
            status: true,
            mensaje: "Se obtuvieron los datos de Gas",
            data: data
        })
    }

    async last({response}){
        // const ultimo = await Valor.Valor.find().limit(1).sort({$natural:-1})

        // const data = await Valor.Valor.aggregate([
        //   {},

        //   { 
        //     $unwind : "$valores" 
        //   },
        //   {
        //     $unwind : "$valores.gas o humo"
        //   },
        //   {
        //     $project: {
        //       Gas : "$valores.gas o humo",
        //       Fecha: "$fecha",
        //       Hora: "$hora",
        //       Created_At: "$createdAt",
        //       Updated_At: "$updatedAt"
        //     },
    

        //   }
        // ])
        let hoy = new Date();
        let day = hoy.getDate();
        let month = hoy.getMonth() + 1;
        let year = hoy.getFullYear();

        day = ('0' + day).slice(-2);
        month = ('0' + month).slice(-2);
        
        const formato = `${day}-${month}-${year}`

        const data = await Valor.Valor.aggregate([
             {
                 $match: {
                     "fecha": formato.toString()
                 }
             },
             {
                 $unwind: "$valores"
             },
             {
                $unwind: "$valores.gas o humo" 
             },
             {
                 $match: {
                     "valores.gas o humo": 'Se ha detectado algo'
                 }
             },

             {
                 $project: {
                    hora: 1,
                    fecha: 1,
                    valores: "$valores.gas o humo"
                 }
             }
        ])

        return response.json({
            status: true,
            mensaje: "Se obtuvo el último dato de Gas",
            data: data
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
  
  async cantidadgas({response}){
    let hoy = new Date();
    let day = hoy.getDate();
    let month = hoy.getMonth() + 1;
    let year = hoy.getFullYear();

    day = ('0' + day).slice(-2);
    month = ('0' + month).slice(-2);
    
    const formato = `${day}-${month}-${year}`

    const data = await Valor.Valor.aggregate([
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
                "valores.gas o humo": 'Se ha detectado algo'
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
        mensaje:"Se obtuvo la cantidad de gas de hoy",
        data: data
    })
}
}

module.exports = GasMongoController
