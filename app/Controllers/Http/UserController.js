'use strict'
const Database = use('Database')
const User = use('App/Models/User')
class UserController {
 async store({request,response}){
    const userData=request.only(['username','email','password','rolid'])
    const user= await User.create(userData)
    const newUser = await Database.table('users as u').innerJoin('roles as r', 'r.id', 'u.rolid').select("u.id","u.username", "u.email","r.rol").where("u.id", user.id)
        return response.created({
         status:true,
         data:newUser     
        })
    }
    async index ({ response }) {
   
        const newUser = await Database.table('users as u').innerJoin('roles as r', 'r.id', 'u.rolid').select("u.id","u.username", "u.email","r.rol as rol","u.created_at") 
            return response.json({
              status: true,
              mensaje: "Se obtuvieron los Usuarios",
              data: newUser
            })
            }
            async show ({ response, params }) {
                const newUser= await Database.table('users as u')
                .innerJoin('roles as r', 'r.id', 'u.rolid')
                .select("u.id","u.username", "u.email","u.password","r.rol as rol","u.created_at")
                .where({"u.id": params.id}).first()

                return response.json({
                  status: true,
                  mensaje: "Se obtuvo el registro",
                  data: newUser
                })
          
              }
          
            async update({request,response,params}){
                // const newUser= await User.find(params.id)
                const newUser = await User.find(params.id)
                newUser.username =request.input('username')
                newUser.email = request.input('email')
                newUser.password = request.input('password')
                newUser.rolid = request.input('rolid')
                // newUser.status = request.input('status')
                await newUser.save()
            
                return response.json({
                  status: true,
                  mensaje: "Se Cambio la Configuracion del Usuario",
                  data: newUser
                })
            
              } 
             
    async destroy ({ params, response }) {
        const marcas = await User.find(params.id)
              
        await marcas.delete()
         
        return response.json({
                  status: true,
                  mensaje: "Se elimino el Usuario",
                  data: marcas
        })

              }
}

module.exports = UserController
