//const { response } = require('express');
const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

app.use(express.static('public'))

const puert=process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


/*app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'Piero Alonso',
        titulo:'Curso de nodejs'
    })
})

app.get('/',(req,res)=>{
    res.render('elements',{
        nombre:'Piero Alonso',
        titulo:'Curso de nodejs'
    })
})
app.get('/',(req,res)=>{
    res.render('generic',{
        nombre:'Piero Alonso',
        titulo:'Curso de nodejs'
    })
}) */
//hacemos que la app tome la carpeta public y servir contenido est[atico]


/**
app.get('',(req,res)=>{res.send('pagina de inicio')})


app.get('/Hola-express-page',(req,res)=>{
    res.send('Hola express')});


app.get('/index',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')})   */  

    /*
    app.get('/generic',(req,res)=>{
    res.sendFile(__dirname + '/public/generic.html')}) ;
app.get('/elements',(req,res)=>{
    res.sendFile(__dirname +'/public/elements.html')});

    */
app.get('*',(req,res)=>{
        res.sendFile(__dirname +'/public/index.html');
    }); 


    app.listen(puert,()=>{console.log('hola',puert)})
