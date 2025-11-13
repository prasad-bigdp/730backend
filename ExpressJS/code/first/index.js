import express from 'express'
const app = express(); // it creates an express appplication which is used to create API's
app.use(express.json())  // middleware for parsing
app.get('/', (req,res) =>
{
	res.send({"message":"Backend setup successfully"})
})
const port = process.env.PORT ||5173

let products = [
	{
		id: "PROD001",
		name: "Laptop Pro X",
		price: 1200.0,
		category: "Electronics",
		inStock: true,
	},
	{
		id: "PROD002",
		name: "Wireless Mouse",
		price: 25.5,
		category: "Accessories",
		inStock: true,
	},
	{
		id: "PROD003",
		name: "Ergonomic Keyboard",
		price: 75.0,
		category: "Accessories",
		inStock: false,
	},
	{
		id: "PROD004",
		name: "4K Monitor 27 inch",
		price: 450.0,
		category: "Electronics",
		inStock: true,
	},
]
app.get('/products', (req, res) =>
{
	res.status(200).send(products)
})

app.post('/products', (req, res) =>
{
	console.log(req.body)
	const { name, price, category, inStock } = req.body;
	if (!name || !price || !category || !inStock)
	{
		return res.status(401).json({message:"Please enter name, price, category and instock. something is missing"})
	}
	const newProduct = {
		id: "PROD00" + products.length + 1,
		name: name,
		price: price,
		category: category,
		inStock:inStock
	}
	products.push(newProduct)
	res.status(201).json({message:"Successfullly added",newProduct})
})

// for updating we do put request
app.put('/products/:id', (req, res) =>
{
	const idValue = req.params.id
	console.log(idValue)
	const ele = products.find((e) => e.id == idValue)
	console.log(ele)
	const {name,price,category,isStock} = req.body
	if (name) { ele.name = name }
	if (price) { ele.price = price }
	if (category) { ele.category = category }
	if(isStock){ele.isStock = isStock}
	res.send({message:"ok",ele})
})
// for deleteing we do delete request
app.delete('/products/:id', (req, res) =>
{
	const idValue = req.params.id
	console.log(idValue)
	const ele = products.findIndex((e) => e.id == idValue)
	console.log(ele)
	products.splice(ele,1)
	res.send({message:"Succesfuly deleted"})
})
app.listen(5173, () =>
{
	console.log("it is running at http://localhost:5173")
})