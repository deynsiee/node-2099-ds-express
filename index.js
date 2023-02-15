/*
SALALILA, DAYNA MICAELA M
WD-202
*/
const express = require('express');
const app = express();

//Serving static files
app.use(express.static('public'));

//serving static file index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

//create 4 more routes - about, blog, upload, contact
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/' + 'about.html');
});
app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/' + 'blog.html');
});
app.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'upload.html');
});
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/' + 'contact.html');
});

const path = require('path');
var errorPg = path.join(__dirname, './public/404.html');
//catch all endpoint will be error page
app.get('*', function (req, res) {
  res.sendFile(errorPg);
});

//Server Listener
app.listen(3000, function () {
  console.log('Server listening at port 3000...');
});

/*server listener option 2
const port = process.env.PORT || 3000;
app.listen(port,()=> {
    console.log(`Listening at port ${port}`);
})
*/
