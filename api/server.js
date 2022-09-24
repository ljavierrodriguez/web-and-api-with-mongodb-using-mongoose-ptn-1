require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const PORT = process.env.PORT || 3000
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true })
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error al intentar conectarse a la base de datos"))

app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

