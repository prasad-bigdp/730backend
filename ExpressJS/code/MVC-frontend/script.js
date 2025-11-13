const productsDiv = document.getElementById("products");
const fetchData = async () =>
{
    try
    {
        const res = await fetch(`http://localhost:5173/api/products/`)
        const data = await res.json();
        displayData(data)
    }
    catch (err)
    {
       console.log(err)    
    }
}
const displayData = (data) =>
{
    console.log(data)
    productsDiv.textContent = ''
    data.forEach((e, i) =>
    {
        const div = document.createElement('div');
    const name = document.createElement('h2')
    name.textContent = e.title
        const pic = document.createElement("img")
        pic.src = e.image
        const cat = document.createElement("p");
        cat.textContent = "Category:"+e.category
        const price = document.createElement('p');
        price.textContent = "Price:₹" + e.cost
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "Delete"
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.addEventListener('click',()=>deleteByID(e.id))
    div.append(name, pic, cat, price,deleteButton);
    productsDiv.appendChild(div);
    })
}
fetchData()

const deleteByID = async (id) =>
{
    try
    {
        const res = await fetch(`http://localhost:5173/api/products/${id}`, { method: "DELETE" })
        console.log(res);
        window.location.reload()
    }
    catch (err)
    {
        console.log(err)
    }
}