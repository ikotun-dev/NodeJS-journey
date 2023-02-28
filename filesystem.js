const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) =>
    //read the index.html file 
    fs.readFile('./index.html', (err, data) =>{
        if(err){
            res.writeHead(404);
            res.end("File not found");
        }else{
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data)
            res.end();

        }

    })

).listen(8080, () => {
    console.log("server is listening on port 8080")
})

