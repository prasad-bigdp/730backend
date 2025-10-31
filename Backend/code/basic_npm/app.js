const http = require('http');
let data = [
    {id:1, name:'nareshit'},
    {id:2, name:'bangalore'},
    { id: 3, name: 'india' },]
console.log(`HHello Nareit`);
const server = http.createServer((req,res) =>
{
     res.setHeader("Access-control-Allow-origin", "*")
    
   
    if ((req.url == "/users") && (req.method=='GET')) {
			res.writeHead(200, { "content-type": "application/json" })
			res.write(JSON.stringify(data))
			res.end()
    }
    else if ((req.url == '/users') && (req.method == 'POST'))
    {
        let b = '';
        req.on('data', (chunk)=>{
            b= b+chunk
        })
        
        req.on('end', () =>
        {
            console.log(b)
            const newData = JSON.parse(b)
						newData.id = data.length + 1
            data.push(newData)
            console.log(data)
						res.writeHead(201, "Successfully added")
						res.end(JSON.stringify(newData))
        })
    }
})
server.listen(5173, () =>
{
    console.log(`server is running at http://localhost:5173`)
})