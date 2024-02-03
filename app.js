const express= require("express")
const bodyParser=require("body-parser")

const app=express()

app.use(bodyParser.urlencoded({extended : false}))

app.use('/add-product',(req,res,next) => {
    res.send("<form action='/product' method='POST'><label>Name </label><input type='text' name='title'><label>Size </label><input type='number' name='productsize'><button type='submit'>Send</button></form>")
});


app.post('/product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
});

app.use('/',(req,res,next) => {
    res.send("<h1>Hello from Express</h1>");
});

app.listen(4000)