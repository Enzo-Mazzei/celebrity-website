const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (req, res) => {
  res.sendFile(__dirname + '/views/works.html');
});

app.get('/public/music/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(__dirname + '/public/music/' + filename);
  });
app.listen(3000, () => {
  console.log("Server is running");
});