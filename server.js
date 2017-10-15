const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
var maintenanceMode = false;

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');


app.use((req,res,next) =>{

    var now = new Date().toString();
    var log = `${now}: ${req.method} : ${req.url} `;

    fs.appendFile('server.log', log + '\n' , (err) =>{
        if (err){   
        console.log('Unable to append to server log' + err);
        }
    });
    next();
});
if (maintenanceMode) {
    app.use((req,res,next) =>{
        res.render('maintenance.hbs'); 
    });  
}
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});
app.get('/', (req,res) => {
    res.render('home.hbs',{
        pageTitle: 'My Home Page',
        welcomeMessage: 'Welcome to my web site'
    });
});
app.get('/projects', (req,res) => {
    res.render('projects.hbs',{
        pageTitle: 'My Project Page',
        welcomeMessage: 'Projects Page Content'
    });
});
app.get('/about', (req,res)=> {
    res.render('about.hbs',{
        pageTitle: 'About',
    });
})
app.get('/bad', (req,res) => {

    res.send({ errorMessage : 'BAD DATA'});
})
app.listen(port, () =>{
    console.log(`Starting server on port ${port}`);
});
