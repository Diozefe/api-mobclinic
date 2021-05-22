const express = require('express');
const { json, urlencoded } = require('body-parser');
const consign = require('consign');
const router = require('../route/index')
const app = express();
app.use(json());
app.use(urlencoded({extended:true}));
app.use('/', router)


module.exports = app;