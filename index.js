var express = require('express');//FIRST add your variables and then install them
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');
var defaultPort = 3000;
app.listen(process.env.PORT || defaultPort);
console.log("is this working");
var hbs = require('hbs');

//SEVEN
app.set('views', path.join(__dirname,'views'));//telling express to use handlebars for views
app.set('view engine', 'hbs'); //defining our view engine which is hbs for template framework

app.get('/', function(req, res, next){
    res.send('this is express practice')
});

app.get('/what',function(req,res,next){ //FOURTH
    var practice = {
        subjectOne: 'nodes',
        subjecTwo: 'express',
        subjectThree: 'handlebars',
        subjectFour: 'github'
    };
    res.json(practice);

});

app.get('/why', function(req, res, next){
    res.send('because I need it!')
});


//FIFTH - go to localhost:3000
//SIXTH - make a public folder for resources(fonts, images, js, css)


//app.listen(3000);//this might come last...not sure
console.log('my server is up!');//third