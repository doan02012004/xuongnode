const laptopsModel = require("../models/laptopsModel")

const cars_index = async(req,res)=>{
    try {
       const cars =  await laptopsModel.find()
       return res.status(200).json({
        message:"Get all ok",
        data: cars
       })
    } catch (error) {
        return res.status(404).json({
            message:error.message,
            data:[]
        })
    }
}
const cars_detail = async(req,res)=>{
    const id = req.params.id;
    try {
       const car =  await laptopsModel.findById(id)
       if(!car){
        return res.status(404).json({
            message:"Cars not found"
        })
       }
       return res.status(200).json({
        message:"Get ok",
        data: car
       })
    } catch (error) {
        return res.status(404).json({
            message:error.message
        })
    }
}
const cars_delete = async(req,res)=>{
    const id = req.params.id;
    try {
       const car =  await laptopsModel.findByIdAndDelete(id)
       if(!car){
        return res.status(404).json({
            message:"Cars not found"
        })
       }
       return res.status(200).json({
        message:"Delete ok",
        data: car
       })
    } catch (error) {
        return res.status(404).json({
            message:error.message
        })
    }
}
const cars_update = async(req,res)=>{
    const id = req.params.id;
    try {
       const car =  await laptopsModel.findByIdAndUpdate(id,req.body)
       if(!car){
        return res.status(404).json({
            message:"Cars not found"
        })
       }
       return res.status(200).json({
        message:"Update ok",
        data: car
       })
    } catch (error) {
        return res.status(404).json({
            message:error.message
        })
    }
}
const cars_post = async(req,res)=>{
    try {
       const car =  await laptopsModel.create(req.body)
       return res.status(200).json({
        message:"Post ok",
        data: car
       })
    } catch (error) {
        return res.status(404).json({
            message:error.message
        })
    }
}

module.exports = {
    cars_index,
    cars_detail,
    cars_delete,
    cars_post,
    cars_update
}