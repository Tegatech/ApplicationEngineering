const express = require('express');

const app = express();
const path = require('path');

app.get('/', function(req,res)
{
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);

// const PORT = 8080;
//
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.get('/', (req, res) => {
//   res.sendFile('index.html', { root: path.join(__dirname, './files') });
// });
//
// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}!`);
// });
