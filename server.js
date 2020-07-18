'use strict';

const express = require('express');

//Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const path = __dirname + '/app/';

//App
const app = express();
const router = express.Router();

router.use(function (req,res,next) {
   console.log('/' + req.method);
   next();
});

router.get('/', (req, res) => {
   res.sendFile(path + 'index.html');
});

router.get('/sharks', function(req,res) {
   res.sendFile(path +'sharks.html');
})

app.use(express.static(path));
app.use('/', router);

app.listen(PORT, HOST);
console.log('Running on https://'+HOST+':'+PORT);
