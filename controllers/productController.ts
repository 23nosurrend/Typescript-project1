import product from "../models/productModel";


const createProduct = async (req:any, res: any): Promise<any> => {
  try {
    const data= await product.create(req.body)
    
    console.log(req.body.name)
    res.status(200).send(data);
  } catch (error) {
    console.error("Error occured while creating product:", error);
    res.sendStatus(500);
  }
};

export default createProduct;