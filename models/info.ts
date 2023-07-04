import mongoose from "mongoose";

const savingSchema= new mongoose.Schema({


   name:{
    type:String
    
   }
   
    
})
export default mongoose.model('savingAccount',savingSchema);