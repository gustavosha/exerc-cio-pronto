const http = require('http');
const fs = require('fs');

let porta = 3000;
let host = 'localhost';

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    let html_page='';

    switch(req.url){
        case 'index1.html':
        html_page='index1.html';
        res.statusCode=200;
        break;
        
        case'index2.html':
        html_page='index2.html';
        res.statusCode=200;
        break;

        case'index3.html':
        html_page='index3.html';
        res.statusCode=200;
        break;

        default:
            case'index1.html':
            html_page='index1.html';
            res.statusCode=200;
            break;
    }
    fs.readFile('./html/'+html_page,(erro,data)=>{
        if(erro){
            console.log(erro);
            res.end();
    }else{
        res.write(data);
        res.end();
    }
    });
});

server.listen(porta,host,()=>{
    console.log("Serviço em execução");
});