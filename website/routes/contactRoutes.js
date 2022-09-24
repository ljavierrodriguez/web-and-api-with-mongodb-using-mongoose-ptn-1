const { contacts_list, contact_edit, contact_store, contact_update, contact_delete, contact_add } = require('../controllers/contact.controller');

const contactsRoutes = require('express').Router();

contactsRoutes.get('/contacts', contacts_list);
contactsRoutes.get('/contacts/add', contact_add);
contactsRoutes.post('/contacts/store', contact_store);
contactsRoutes.get('/contacts/:id/edit', contact_edit);
contactsRoutes.post('/contacts/:id/update', contact_update);
contactsRoutes.get('/contacts/:id/delete', contact_delete);

module.exports = contactsRoutes;