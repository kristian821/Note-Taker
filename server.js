const express = require('express');
const path = require('path');
const { notes } = require('./db/db.json');
const app = express();
const router = require('express').Router();
const PORT = process.env.PORT || 3009;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API now listening on PORT ${PORT}`);
});