const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.render('home.hbs',{
        pageTitle: 'My Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my web site'
    });
});
app.get('/about', (req,res)=> {
    res.render('about.hbs',{
        pageTitle: 'About',
        currentYear: new Date().getFullYear()
    });
})
app.get('/bad', (req,res) => {

    res.send({ errorMessage : 'BAD DATA'});
})
app.listen(3000, () =>{
    console.log('Starting server on port 3000');
});
