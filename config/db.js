const mongoose = require('mongoose')
const connectDB = async(uri)=>{
    try {
        await mongoose.connect(uri)
        console.log("Conect success")
    } catch (error) {
        console.log("Connect fail")
    }
}
module.exports = connectDB