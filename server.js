const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.send('Hello Express!');
});
app.get('/about', (req,res)=> {
    res.send('<h1>About</h1>The About Page');
})
app.get('/bad', (req,res) => {

    res.send({ errorMessage : 'BAD DATA'});
})
app.listen(3000, () =>{
    console.log('Starting server on port 3000');
});
