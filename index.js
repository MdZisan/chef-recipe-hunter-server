const express = require('express');
const app =  express();
const port = process.env.PORT || 5000
const chefs= require('./chef-details.json')
const cors = require('cors')
const chefrecipes = require('./recipes.json')

app.use(cors());

app.get('/',(req,res)=>{

res.send('Hello World!')
});

app.get('/chefs',(req,res)=>{
    res.send(chefs)
});


app.get('/chefrecipes/:id',(req,res)=>{
    const id = req.params.id;
    const chefrecipe = chefrecipes.filter(recipes=>recipes.chef_id === id)

    res.send(chefrecipe)
    
})




app.listen(port,()=>{
    console.log(`chef recipe running on ${port}`);
})

