'use strict'

// variables Globales
const express = require('express');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 8080);

app.get('/', (req, res)=>{
    res.send('iDeveloper') 
})

// Starting
app.listen(app.get('port'), () => {
    console.log(`Start server port: ${app.get('port')}`);
});