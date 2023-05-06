const express = require('express');
require('dotenv').config({ path: '/.env' })
const cors = require('cors');
const connection = require('./connection');
const user = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', user);

module.exports = app;

