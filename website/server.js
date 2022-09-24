require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const contactsRoutes = require('./routes/contactRoutes');
const PORT = process.env.PORT || 3000
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true })
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error al intentar conectarse a la base de datos"))

app.use(contactsRoutes);

app.get('/', (req, res) => {
    return res.render('index');
})


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


