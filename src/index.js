const express=require("express");
const app=express();
const port = process.env.PORT || 3000;
const path=require("path");
const hbs=require("hbs");
require('./db/connection');          // importing db file
const Reserv = require('./models/onlinereservation');  // Online Reservation Page
const Usercontact = require('./models/contact');      // contact Reg Form
const Register = require('./models/registers');     // Register Form
const Checkout = require('./models/checkout');     // Checkout Form
const { urlencoded } = require("express");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

//builtin middlewear
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../template/views");
const partialPath=path.join(__dirname,"../template/partials");

app.use(express.urlencoded({extended: false}));

app.use(express.static(staticPath));

//to set the view engine
app.set("view engine","hbs")
app.set("views",templatePath)
hbs.registerPartials(partialPath);


//template engine route
app.get('/',(req,res)=>{
    // res.render("login")
    res.render("login")
})
app.get('/index',(req,res)=>{
    // res.render("login")
    res.render("index")
})
app.post('/index', async(req, res) => {
    try {
        // res.send(req.body);
        const reservData = new Reserv(req.body);
        await reservData.save();
        res.status(201).render('index');
    }catch(err) {
        res.status(500).send(err);
    }
})


app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/checkout',(req,res)=>{
    res.render("checkout")
})
app.post('/checkout', async(req, res) => {
    try {
        // res.send(req.body);
        const checkData = new Checkout(req.body);
        await checkData.save();
        res.status(201).render('checkout');
    }catch(err) {
        res.status(500).send(err);
    }
})
app.get('/chef',(req,res)=>{
    res.render("chef")
})

app.get('/menu',(req,res)=>{
    res.render("menu")
})
app.post('/menu', async(req, res) => {
    try {
        // res.send(req.body);
        const reservData = new Reserv(req.body);
        await reservData.save();
        res.status(201).render('menu');
    }catch(err) {
        res.status(500).send(err);
    }
})


app.get('/products',(req,res)=>{
    res.render("products")
})

app.get('/menu_card',(req,res)=>{
    res.render("menu_card")
})


app.get('/contact',(req,res)=>{
    res.render("contact")
})

app.post('/contact', async(req, res) => {
    try {
        // res.send(req.body);
        const contactDate = new Usercontact(req.body);
        await contactDate.save();
        res.status(201).render('contact');
        // alert("Thank You!")
    }catch(err) {
        res.status(500).send(err);
    }
})
app.get('/products',(req,res)=>{
    res.render("products")
})


// Login
app.get('/',(req,res)=>{
    res.render("index")
})
// Login Check
app.post('/',async(req,res)=>{
    try{
        const username=req.body.username;
        const password = req.body.password;
        const usermail = await Register.findOne({username:username});
        const isMatch = await bcrypt.compare(password, usermail.password)
        if(isMatch){
            res.status(201).render("index")
        }
        else{
            res.send("invalid login details")
        }

    }
    catch(error){
        res.status(400).send("invalid login details")
    }
})



// Registration
app.get('/register',(req,res)=>{
    res.render("register")
})

// Creating New User On DB
app.post('/register', async(req, res) => {
    try {
        
        
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword){
            // res.send(req.body);
            const registerDate = new Register(req.body);
            await registerDate.save();
            res.status(201).render('login');
        }else{
            res.send("Password are not matching")
        }
    }catch(err) {
        res.status(500).send(err);
    }
})


// 
// handle a signup submission
app.post('/index', function(req, res) {

    // create the signup email message
    const subscribe = {
        to: 'vaibhavmali473@gmail.com',
        from: req.body.subemail,
        subject: 'User subscribed',
        text: req.body.email + ' has been subscribed'
    }

    // send the email and handle any errors
    sendgrid.send(subscribe, function(err, result) {
        // handle errors
    });

    // redirect back to the original page
    res.redirect('index');
});


// DB
mongoose.connect("mongodb://127.0.0.1:27017/Web_Resto")
.then(() => {console.log("Connected with Resto")})
.catch((err) => {console.log(err)})


app.listen(port,()=>{
    console.log(`listening the port at ${port}`)
})