import { any } from "webidl-conversions"
import cart from "../models/cartModel"
import product from "../models/productModel"

const createCart=async(req:any,res:any):Promise<any> =>{

    try{
        const data=req.body
        const found=await product.findOne({name:data.name})
        if(!found){
            res.status(409).json({
                message:"this product is not available"
            })
        }else{
            const price=found.price
            const Quantity=found.Quantity
            res.status(200).json({
                message:" this is about created cart",price,Quantity
            })

           const selected=new cart({
            name:found,
            price:price,
            Quantity:Quantity
           })
           selected.save()
        }
        
    }catch(e){
        console.log("this is the error:",e)

    }    

}

const viewCart=async(req:any,res:any): Promise<any>=>{
    try{
        const allCart=await cart.find({})
        console.log("all products in cart")
        res.status(200).json({
            message:"This is all produst",allCart
        })

    }catch(e){
        console.log("THis is the error:",e)
        res.status(400).json({
            message:"error while viewing all carts",e
        })

    }

}

const deleteCart=async(req:any,res:any):Promise<any> =>{
    try{
        const data=req.body
        const found=await product.findOne({name:data.name})
        if(!found){
            res.status(409).json({
                message:"this products is not available"
            })
        }else{
            const id=found._id
            await cart.deleteOne({_id:id})
            res.status(200).json({
                message:"the product is deleted",
            })
        }
    }catch(e){
        console.log("error occured while deleting:",e)

    }
}


export { createCart,viewCart,deleteCart}