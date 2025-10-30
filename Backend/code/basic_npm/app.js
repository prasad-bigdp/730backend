const http = require('http');
let data = [
    {id:1, name:'nareshit'},
    {id:2, name:'bangalore'},
    { id: 3, name: 'india' },]
console.log(`HHello Nareit`);
const server = http.createServer((req,res) =>
{
    res.writeHead(200, { 'content-type': 'application/json' })
    res.write(JSON.stringify(data))
    res.end();
})
server.listen(5173, () =>
{
    console.log(`server is running at http://localhost:5173`)
})