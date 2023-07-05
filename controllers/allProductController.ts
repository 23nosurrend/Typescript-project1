import student from "../models/productModel"

const allProduct=async(req:any,res:any):Promise<any>=>{
    try {
        
        const data=await student.find({})
        
        console.log(" all products retrieved")
        res.status(200).send(data);
      } catch (error) {
        console.error("Error occured while creating product:", error);
        res.sendStatus(500);
      }



}


export default allProduct;
