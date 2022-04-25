'use strict'
const Database = use('Database')
const Role = use('App/Models/Role')
const { validate } = use('Validator')
class RolController {
     async index({ response }) {
      
       
        const rol1 = await Role.query().select("id","rol","created_at as Fecha").fetch()
      
        return response.json({
          status: true,
          mensaje: "Se obtuvieron los Roles",
          data: rol1
        })
      
    }
   async show ({ response, params }) {
      const rol1 = await Role.query().select("id","rol").where({id: params.id}).first()
      return response.json({
        status: true,
        mensaje: "Se obtuvieron las marcas",
        data: rol1
      })
      
   
    }
  
  
    async store({ request, response }) {
      const rol1 = new Role()
      const rol = request.input('rol')

        rol1.rol = rol
        await rol1.save()
        return response.created({
          status:true,
          mensaje:"Se Creo el Rol correctamente",
          data:rol1    
         })
        }
    
  
   
  

  
    async update({ params, request, response }) {
      
      
        const rol1 = await Role.find(params.id)
        rol1.rol = request.input('rol')
        await rol1.save()
        return response.json({
          status: true,
          mensaje: "Se Actualizo el Rol ",
          data: rol1
        })
    }

    
  
     async destroy({ params, response }) {
      
        const rol1 = await Role.find(params.id)
        await rol1.delete()
        return response.json({
          status: true,
          mensaje: "Se Borro el Rol ",
          data: rol1
        })
      } 
  }

module.exports = RolController
