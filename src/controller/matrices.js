const { typeOf } = require("mathjs");
const { generarTranspuesta } = require("../utils/operaciones");

exports.matrices = (req, res) => {
    let { url } = req;

    let n = url.split("/")[1];

    if(n!='favicon.ico') {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(generarTranspuesta(n));
        res.end();
    }
    
};