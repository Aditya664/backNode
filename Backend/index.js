const express = require('express');
require('dotenv').config({path: '/.env'})
const cors = require('cors');
const connection = require('./connection');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

module.exports = app;

