const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());
const PORT = "4400";
const axios = require("axios")
app.use(express.json()); // Pour gérer les données JSON dans le corps de la requête
app.use(express.urlencoded({ extended: true })); // Pour gérer les données URL encodées dans le corps de la requête
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });

app.get("/display",(req,res)=>{
    const {lon,lat} = req.body;
    const dat = new Date();
    const date = dat.getDate();
    const apiKey = "ed52192036a9b04a04c94760df27454b"

    axios.get(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${date}&appid=${apiKey}`,{
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
    .then(res => {
        res.send(res.json())  
    })
    .catch(err => {
        console.error(err); 
    })
})

app.post("/add",(req,res)=>{
    const {lon,lat} = req.body;
    const dat = new Date();
    const date = dat.getDate();
    const apiKey = ""

    axios.post(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${date}&appid=${apiKey}`,{
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
    .then(res => {
        res.send(res.json())  
    })
    .catch(err => {
        console.error(err); 
    })
})
// const { createProxyMiddleware } = require('http-proxy-middleware');
// app.use('/display', (req,res)=>{ 
//     target: `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${date}&appid=${apiKey}`, //original url
//     changeOrigin: true, 
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//     }
// });
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
});