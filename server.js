const express = require('express');
var app = express();

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
