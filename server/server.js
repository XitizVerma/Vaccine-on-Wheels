const express = require("express"); 
const app = express(); 
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ 
	extended:false
})); 

mongoose.connect("mongodb+srv://Avacado:Avacado@cluster0.bu2ko.mongodb.net/testDB",
{
    
    useNewUrlParser : true,
    useUnifiedTopology :true ,
});
//create a new data schema
const testSchema = {
    name : String ,
    vid :  String ,
    address :  String ,
    city :  String ,
    state :  String ,
    pincode :  Number ,
    phone : Number ,
    email : String ,
}
const Note = mongoose.model("Note",testSchema);

app.get("/", function(req, res) { 
    res.sendFile( "../client/src/components/Applicant.jsx"); 
}); 

app.post("/", function(req, res) { 
    let newNote = new Note ({
         name : req.body.name,
         vid : req.body.vid ,
         address : req.body.address ,
         city : req.body.city ,
         state : req.body.state ,
         pincode : req.body.pincode ,
         phone : req.body.phone ,
         email : req.body.email
        });
        newNote.save();
        res.redirect('/');
}); 

app.listen(5000,function(){
    console.log("Server is running on port 5000");
})