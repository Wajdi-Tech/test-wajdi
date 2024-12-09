const express=require('express')
const app=express()
const dotenv = require('dotenv');
const mongoose = require("mongoose");
app.use(express.json());
/*dotenv.config();*/

app.get('/post',(req,res)=>{

 let p= 
    [
        {  'titre': "Premier post", 'contenu': 'détails premier post' },
        {  'titre': "Deuxième post", 'contenu': 'détails deuxième post' },
        {  'titre': "Troisième post", 'contenu': 'détails troisième post' },
        {  'titre': "Quatriéme post", 'contenu': 'détails quatriéme post' }
    ]
    res.json(p)

})

app.get('post/:id',(req,res)=>{

       res.json()
   
   })
   
app.listen(3000,()=>console.log("server demarée"))



mongoose.connect(
    "mongodb+srv://wajdibargui8:<db_password>@post.0oscj.mongodb.net/?retryWrites=true&w=majority&appName=post"
)
.then(() => console.log("Connexion à MongoDB réussie !"))
.catch(() => console.log("Connexion à MongoDB échouée !"));


