import express from "express"
import allProduct from "../controllers/allProductController"

const router=express.Router()

router.get("/products",allProduct )

export default router;
