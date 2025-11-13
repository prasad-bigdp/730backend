// basic get logic for all products
import { Product } from "../Models/ProductModel.js";
export const getProducts =async (req,res) =>
{
    try
    {
        const data = await Product.find()
    res.status(200).json(data)
    }
    catch (err)
    {
        res.status(501).json({message:"internal server error"})
    }
}
export const getProductById = async (req, res) =>
{
    try
    {
        console.log(req.params.id);
        const data = await Product.find({id:req.params.id})
        res.status(200).json(data)
    }
    catch (err)
    {
        console.log(err)
       res.status(501).json({message:"internal server error"}) 
    }
}
export const deleteProductById = async (req, res) => {
	try {
		console.log(req.params.id)
		const data = await Product.deleteOne({ id: req.params.id })
		res.json({message:"item deleted successfully",data:data})
	} catch (err) {
		console.log(err)
		res.status(501).json({ message: "internal server error" })
	}
}
export const addProduct = async (req, res) =>
{
    try
    {
        console.log(req.body)
				const { title, id, category, image, cost, rating } = req.body
				const response = await Product.insertOne({
					id: id,
					title: title,
					category: category,
					image: image,
					cost: cost,
					rating: rating,
				})
				res.status(201).json({ message: "product added successfully" })
    }
    catch (err)
    {
        console.log(err);
        res.status(501).json({message:"internal server error"})
    }
}