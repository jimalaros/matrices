const { typeOf } = require("mathjs");
const { generarTranspuesta } = require("../utils/operaciones");

exports.matrices = (req, res) => {
    let { url } = req;

    let n = url.split("/")[1];

    if(n!='favicon.ico') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-setHeaders', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(generarTranspuesta(n));
        res.end();
    }
    
};