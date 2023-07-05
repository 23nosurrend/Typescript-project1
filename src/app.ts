import express from 'express'
import {Request,Response} from 'express'
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "../routes/userRoute"
import productRoute from "../routes/productRoute"
import welcome from '../routes/welcomeRoute'
import all from "../routes/allProductsRoute"

dotenv.config()

const app=express()
app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

// connection to monmgo db 

const MongodbConnectionString="mongodb+srv://keynesbizimana:KEN12345@cluster0.bhe3e81.mongodb.net/?retryWrites=true&w=majority"

async function connectToMongodb(mongoLink:string){

    await mongoose.connect(mongoLink);

    

    console.log("connected to mongo db")




}
try{
     connectToMongodb(MongodbConnectionString)

}catch(e){
  console.log(" error when connecting to mongo",e)
}

//home display
app.use("/welcome",welcome)
/////////
app.use("/user",userRouter)
//////////
/// about creating products
app.use("/product",productRoute)
// get all products
app.use("/all",all)

app.get("/",(req:Request,res:Response)=>{
   return res.sendStatus(200)
   
})

app.post('/api/v1',(req:Request,res:Response)=>{
    console.log(req.body)
    return res.send("welcome")
})
console.log("hello keynes")

app.listen(4000,()=>{
    console.log("Application listening at http://localhost:4000")
})