'use strict'

// variables Globales
const express = require('express');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

app.get('/', (req, res)=>{
    res.send('iDeveloper v0.2') 
})

// Starting
app.listen(app.get('port'), () => {
    console.log(`Start server port: ${app.get('port')}`);
});