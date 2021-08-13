const express = require ('express');
const app= express();
const path = require('path');

//____________________________________________________________________________________//

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))


const router = require ('./routes/routes');
app.use(router);




//_______HOMEPAGE & THEGAME______//
app.get('/thegame', (req, res) => {
    res.render('thegame');
})
app.get('/home', (req, res) => {
    res.render('homepage');
})


app.listen(8000, () => console.log('apps berjalan di port 8000'));