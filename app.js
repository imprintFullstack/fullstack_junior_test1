const express = require('express');
const path = require('path');
const request = require("request");
const app = express();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;
const jwtKey = "hellllllow123";
let favorites = [];
//client static files
app.use(express.static(path.join(__dirname, "./client/dist/client")));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//angular dist
app.get('/', (req, res) => {
    console.log("/angular client  ");
    let distpath = path.join(__dirname, "./client/dist/client");
    res.sendFile(path.join(distpath, '/index.html'));
});

app.post('/api/addToFavorites',[authMiddleware], (req, res) => {
    const songName = req.body.songName;
    console.log(songName);
    //check if already exist
    let search = favorites.filter((x)=> x == songName);
    //if exist remove from array
    if(search.length > 0 ){
        favorites = favorites.filter((x) => x!= songName);
        res.json({status:"deleted"});
    }else{
        favorites.push(songName);
        res.json({status:"added"});
    }
});

app.get('/api/getAllFavorites',[authMiddleware], (req, res) => {
    console.log(favorites);
    res.json(favorites);
});

function authMiddleware(req, res, next){
    try {
      const token = req.headers.authorization.split("Bearer "); 
      const data = jwt.verify(token[1], jwtKey);
      if(data.email == "aviv@cycurity.com" && data.name == "aviv"){
        next();
      }
    } catch (error) {
        console.log(error);
        res.status(403).json({error:"Not Authorize"});
    }
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// cosnt token = jwt.sign({ email: 'aviv@cycurity.com', name: "aviv" }, 'hellllllow123');
