mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/am').then(()=>{
    console.log('connected successfully')
}).catch((error)=>{console.log(error)})

Schema = mongoose.Schema({
    name: String,
    mail: String,
    age: Number
})

StudentModel = mongoose.model('student', Schema);

module.exports = StudentModel