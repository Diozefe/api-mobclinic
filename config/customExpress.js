const express = require('express');
const { json, urlencoded } = require('body-parser');
const consign = require('consign');

const app = express();
app.use(json());
app.use(urlencoded({extended:true}));
consign()
    .include('./controllers')
    .into(app);

module.exports = app;