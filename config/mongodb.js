const Env = use('Env')
var mongoose = require('mongoose');
mongoose.connect(Env.get('DB_MONGODB_CONNECTION', 'mongodb://frell:frell*341@3.93.99.37:27017/sensor_box'), { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => console.log("Successfull MongoDB connection"))
    .catch(console.error);