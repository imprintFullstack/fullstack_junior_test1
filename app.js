const express = require('express');
const path = require('path');
const request = require("request");
const app = express();

const port = process.env.PORT || 3000;

//client static files
app.use(express.static(path.join(__dirname, "./client/dist/client")));
//angular dist
app.get('/a', (req, res) => {
    console.log("/a");
    let distpath = path.join(__dirname, "./client/dist/client");
    res.sendFile(path.join(distpath, '/index.html'));
});

app.get('/api/user', (req, res) => {
    res.sendFile(path.join(__dirname, './json_data', 'user.json'));
});

app.get('/api/songs', (req, res) => {
    // const options = {
    //     method: 'GET',
    //     url: 'https://www.shazam.com/shazam/v2/en-US/IL/web/-/tracks/world-chart-world',
    //     qs: { pageSize: '200', startFrom: '0' },
    //     headers: { }
    // };
    // request(options, function (error, response, body) {
    //     if (error) res.json(error);
    //     const data = JSON.parse(body);
    //     res.json(data);
    // });
    res.sendFile(path.join(__dirname, './json_data', 'songs.json'));
});
console.log(path.join(__dirname, "./client/dist/client"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


