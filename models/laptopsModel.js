const mongoose = require('mongoose')

const laptopSchema = new mongoose.Schema({
    name:{type:String, required:true},
    vote:{type:Number,min:1,max:6,default:3},
    des:{type:String,required:true},
    price:{type:Number, required:true},
    public:{type:Boolean,default:true}

},
{
    timestamps:true,
    versionKey:false
})
const laptopsModel = mongoose.model('laptops', laptopSchema);
module.exports = laptopsModel