const express = require('express');
const app = express();
//Login 
const jwt = require("jsonwebtoken"); 
const key = "Clave secreta";
//Datos de las categorias 
const cat101 = require('./categories/cat101.json');
const cat102 = require('./categories/cat102.json');
const cat103 = require('./categories/cat103.json');
const cat104 = require('./categories/cat104.json');
const cat105 = require('./categories/cat105.json');
const cat106 = require('./categories/cat106.json');
const cat107 = require('./categories/cat107.json');
const cat108 = require('./categories/cat108.json');
const cat109= require('./categories/cat109.json');
// Datos de los productos 
const product40281  = require('./products/40281.json');
const product50741  = require('./products/50741.json');
const product50742 = require('./products/50742.json');
const product50743  = require('./products/50743.json');
const product50744 = require('./products/50744.json');
const product50921 = require('./products/50921.json');
const product50922  = require('./products/50922.json');
const product50923  = require('./products/50923.json');
const product50924  = require('./products/50924.json');
const product50925  = require('./products/50925.json');
const product60801  = require('./products/60801.json');
const product60802  = require('./products/60802.json');
const product60803  = require('./products/60803.json');
const product60804  = require('./products/60804.json');
// Comentarios de los productos 
const comments40281 = require('./products_comments/40281.json');
const comments50741 = require('./products_comments/50741.json');
const  comments50742= require('./products_comments/50742.json');
const comments50743 = require('./products_comments/50743.json');
const comments50744= require('./products_comments/50744.json');
const comments50921= require('./products_comments/50921.json');
const  comments50922= require('./products_comments/50922.json');
const comments50923= require('./products_comments/50923.json');
const comments50924= require('./products_comments/50924.json');
const comments50925= require('./products_comments/50925.json');
const comments60801= require('./products_comments/60801.json');
const comments60802= require('./products_comments/60802.json');
const comments60803= require('./products_comments/60803.json');
const comments60804= require('./products_comments/60804.json');
// Datos para el carrito 
const userCart = require('./user_cart/25801.json');
// Datos para init 
const CATEGORIES_URL = require('./cats/cats.json');
const sell = require('./sell/publish.json');
const buy = require('./cart/buy.json');

const port = 3000; // Puerto que se utiliza 

app.use(express.json()); // Permite que el servidor analice el cuerpo de las peticiones como JSON


app.use(express.static("public"));
app.use(express.static(__dirname + `/public`));



//----------------------------------------------Products--------------------------------------------------

// Juntamos todos las terminaciones de los archivos en la carpeta categories 
const data = {
    "101.json": cat101,
    "102.json": cat102,
    "103.json": cat103,
    "104.json": cat104,
    "105.json": cat105,
    "106.json": cat106,
    "107.json": cat107,
    "108.json": cat108,
    "109.json": cat109
  };
// Api para las categorias 
  app.get('/api/products/:catid', (req, res) => {
    const catid = req.params.catid;
    res.json(data[catid]); 
  });
//----------------------------------------Product-Info--------------------------------------------------------
// Juntamos todos las terminaciones de los archivos en la carpeta products 
const prodInfo = {
    "40281.json": product40281,
    "50741.json": product50741,
    "50742.json": product50742,
    "50743.json": product50743,
    "50744.json": product50744,
    "50921.json": product50921,
    "50922.json": product50922,
    "50923.json": product50923,
    "50924.json": product50924,
    "50925.json": product50925,
    "60801.json": product60801,
    "60802.json": product60802,
    "60803.json": product60803,
    "60804.json": product60804,
    

  };
// Api para la info del producto  
  app.get('/api/products_info/:receivedProd', (req, res) => {
    const receivedProd = req.params.receivedProd;
    res.json(prodInfo[receivedProd]); 
  });

// Juntamos todos las terminaciones de los archivos en la carpeta products 
const prodInfoComments = {
    "40281.json":  comments40281,
    "50741.json":  comments50741,
    "50742.json" : comments50742,
    "50743.json":  comments50743, 
    "50744.json" :  comments50744,
    "50921.json" :  comments50921,
    "50922.json":  comments50922,
    "50923.json" :  comments50923,
    "50924.json" :  comments50924,
    "50925.json" :  comments50925,
    "60801.json" :  comments60801,
    "60802.json" :  comments60802,
    "60803.json" :  comments60803, 
    "60804.json":  comments60804,
    

  };

// Api para la info del producto  
  app.get('/api/products_info_comments/:receivedProd', (req, res) => {
    const receivedProd = req.params.receivedProd;
    res.json(prodInfoComments[receivedProd]); 
  });

//----------------------------------------CART------------------------------------------------
//Api para un producto del carrito 
app.get('/api/user_cart/:userCart', (req, res) => {
    res.json(userCart); 
  });



//---------------------------------------INIT------------------------------------------------
app.get('/api/cats/', (req, res) => {
    res.json(CATEGORIES_URL); 
  });

  app.get('/api/sell/', (req, res) => {
    res.json(sell); 
  });

  app.get('/api/buy/', (req, res) => {
    res.json(buy); 
  });

//----------------------------------------Login--------------------------------------------------

//LOGIN

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        const token = jwt.sign({ username }, key)
        res.status(200).json({ token })
    } else {
        res.status(401).json({ message: "Usuario o contraseña inválidos." })
    }
})

app.use("/", (req, res, next) => {
    try {
        const decoded = jwt.verify(req.headers["access-token"], key);
        console.log(decoded);
        next();
    } catch (err) {
        res.status(401).json({ message: "Usuario no autorizado." })
    }
})

// Esta línea inicia el servidor para que escuche peticiones en el puerto indicado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });






