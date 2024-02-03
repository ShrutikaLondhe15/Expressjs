const express= require("express")
const app=express()

app.use((req,res,next) => {
    console.log("In the middleware");
    res.send("<h1>Hello from Middleware</h1>")
    next();//allows the request to continue to the next middleware in line
});

app.use((req,res,next) => {
    console.log("In second middleware");
});

app.listen(4000)