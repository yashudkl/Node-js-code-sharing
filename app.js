
const http = require('http');//Importing http module

const server = http.createServer((req,res)=>{ 
if(req.url === '/'){ // if takes req what is sent after website
    res.end('This is my home page')// this is response for req above
}
else if(req.url=== '/about'){ // else if takes req /about
    res.end('This is my about page')//This is response for req above
}
else{res.end(`<h1>OOps!</h1>                               
<p>THis page is not available as per your request</p>
<a href="/"> click here to goto homepage</a>
`)} // what if user requests sth else which is not available
   
})
server.listen(5000)//Sets server port