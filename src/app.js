const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const productRouter = express.Router();

app.use(bodyParser.json());

//server
//setting
app.set('port',process.env.PORT || 3001);

//middlewares
//app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hello World ");
});

app.post('/a', (req,res) => {
    res.send("soy post Hello World ");
});

app.listen(app.get('port'),()=>{
    console.log( `server works on ${app.get('port')}` );
});

//const routes = require('./routes');
//app.use('/test',routes);