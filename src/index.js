const express = require("express");
const bodyParser = require("body-Parser")
const mongoose = require("mongoose");
const route = require("./routes/routes");
const app = express()
const multer = require('multer');

app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());


mongoose.connect("mongodb+srv://kunal0709:Singhkunal7@cluster0.u5yk4f2.mongodb.net/project2",{
    useNewUrlParser:true  
}) //promise return

.then(()=> console.log("MongoDB is connected"))  
.catch(err => console.log(err))


app.use("/",route) 

app.use( (req ,res) => {
    res.status(404).send({status : false , message :`Page Not Found , Given URL ${req.url} is incorrect for this application.`})
})

app.listen(process.env.PORT || 3001, function(){
    console.log("express app runing on port "+(process.env.PORT || 3001) )
})


