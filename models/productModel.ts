import mongoose from "mongoose";

const productSchema= new mongoose.Schema({


   name:{
    type:String
    
   },
   price:{
    type:Number
   },
   Quantity:{
    type:Number
   }
   
    
})
export default mongoose.model('product',productSchema);