const express = require('express');
const userController = require('./controller/userController');

const app = express();

app.get('/usuarios',userController.getUsuarios);

app.listen(3000);