const { contacts, createContact, updateContact, deleteContact } = require('../controllers/contact.controller');

const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.status(200).json({ msg: 'API REST NodeJS' });
});

routes.get('/contacts', contacts);
routes.post('/contacts', createContact);
routes.put('/contacts/:id', updateContact);
routes.delete('/contacts/:id', deleteContact);


module.exports = routes;