const express = require('express');
const app =  express();
const port = process.env.PORT || 5000
const chefs= require('./chef-details.json')

app.get('/',(req,res)=>{

res.send('Hello World!')
})

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})


app.listen(port,()=>{
    console.log(`chef recipe running on ${port}`);
})

