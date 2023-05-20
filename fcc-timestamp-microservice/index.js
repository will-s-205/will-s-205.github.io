const express =require('express');
const app = express();
require('dotenv').config();

app.listen(process.env.PORT, ()=>console.log(`server live now on http://localhost:${process.env.PORT}`)); 

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        made: 'China',
        size: 'XXL'
    })
});

function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('William')