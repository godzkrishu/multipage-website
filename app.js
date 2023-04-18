const express=require("express");
const ejs=require("ejs");
 const bodyParser=require("body-parser");
const app=express();
app.set('view engine', 'ejs');
 
 app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const customer=[]; // creating  the array for soting the  our new customer
 app.get("/", function(req,res)
 {
    res.render("home")
 })
 app.get("/contact", function(req,res)
 {
    res.render("contact")
 })
 app.get("/about", function(req,res)
 {
    res.render("about")
 })

 app.post("/contact", function(req,res)
 {
     const newCustomer={  // creating the new customer object
        name:req.body.name,
        email:req.body.email,
         message:req.body.email
     };
      console.log(newCustomer);
    customer.push(newCustomer); // storing into the array
     res.redirect("/"); //redirected to the  homepage
 })


//  app.post("/compose", function(req,res)
//   {
//     const post={
//       tittle:req.body.heading,
//       content:req.body.content
//        };
//     posts.push(post);
//     res.redirect("/");

//   });
  app.listen(3000,function()
  {
    console.log(" server is running on the port 3000");
  })