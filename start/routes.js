'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('sensores','SensoresEjemploController').apiOnly()
Route.resource('detalles','DetalleSensorController').apiOnly()
Route.post('/login', 'AuthController.login')


Route.group(()=>{

  Route.get('sensors/get','SensoresController.index')
  Route.post('sensors/data','SensoresController.store')

  Route.get('gh/get', 'PIRController.index')
  Route.post('gh/store', 'PIRController.store')

  Route.get('pir/get', 'GHController.index')
  Route.post('pir/store', 'GHController.store')

  Route.get('th/get', 'THController.index')
  Route.post('th/store', 'THController.store')

  Route.get('us/get', 'USController.index')
  Route.post('us/store', 'USController.store')
}).middleware(['authenticated']);


/////////////////////LOGIN///////////////////////////////
Route.resource('users','UserController')
.apiOnly()

.validator(new Map([
    [['users.store'],['StoreUser']]
]))
//////////////////////////////////////////////////////////////
Route.group(() => {
/////////////////////ROLES////////////////////////////////////
Route.resource('rol','RolController').apiOnly()
   ///////////////////////////////////////////////////////////
/////////////////////TEMPERATURA///////////////////////////////
Route.resource('temperatura', 'TemperaturaMongoController')
.apiOnly()
Route.get('tempalta','TemperaturaMongoController.tempalta')
Route.get('tempbaja','TemperaturaMongoController.tempbaja')
Route.get('promedio','TemperaturaMongoController.promedio')
//******************************************************//
/////////////////////////////////////////////////////////

//////////////////////HUMEDAD///////////////////////////
Route.resource('humedad', 'HumedadMongoController')
.apiOnly()
Route.get('humalta','HumedadMongoController.humalta')
Route.get('humbaja','HumedadMongoController.humbaja')
Route.get('promedioh','HumedadMongoController.promedioh')
//******************************************************//
/////////////////////////////////////////////////////////

//////////////////////GAS///////////////////////////
Route.resource('gas', 'GasMongoController').apiOnly()
Route.get('last','GasMongoController.last')
Route.get('cantidadgas','GasMongoController.cantidadgas')
//******************************************************//
/////////////////////////////////////////////////////////

//////////////////////HUMO///////////////////////////
Route.resource('humo', 'HumoController').apiOnly()
Route.get('last','HumoController.last')
Route.get('vecesg','HumoController.vecesg')
//******************************************************//
/////////////////////////////////////////////////////////

//////////////////////ULTRASONICO///////////////////////////
Route.resource('ultrasonico', 'UltrasonicoMongoController').apiOnly()
Route.get('ultraalta','UltrasonicoMongoController.ultraalta')
Route.get('ultrabaja','UltrasonicoMongoController.ultrabaja')
Route.get('promediou','UltrasonicoMongoController.promediou')
//******************************************************//
/////////////////////////////////////////////////////////

//////////////////////PRESENCIA///////////////////////////
Route.resource('presencia', 'PresenciaMongoController').apiOnly()
Route.get('detallesPresencias','PresenciaMongoController.detallesPresencias')
Route.get('cantidadPresencias','PresenciaMongoController.cantidadPresencias')
//******************************************************//
/////////////////////////////////////////////////////////

}).middleware(['authenticated']);

