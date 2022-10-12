const express = require('express');
const path    = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');


const routes = require('./routes')
require('dotenv').config()


/* Inicializo app */
const app = express()

//Habilito handlebars
app.engine('handlebars',
    exphbs.engine({
        defaultLayout: 'layout'
    })
)
app.set('view engine', 'handlebars')


//Carpeta estatica
app.use(express.static(path.join(__dirname, 'public')))


//Routing
app.use('/', routes())
//404-Página no existente
app.get('*', (req,res) =>{
    res.render('404')
})


//Inicializo el servidor
const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})