const Contact = require("../models/contact")

const contacts_list = (req, res) => {
    Contact.find({}, (err, contacts) => {
        if(err) throw err;
        return res.render('contacts/list', { contacts }) 
    })
}

const contact_add = (req, res) => {
    return res.render('contacts/add');
}

const contact_store = (req, res) => {
    const { name, phone } = req.body;

    Contact.create({ name, phone }, (err, contact) => {
        if(err) throw err;
        return res.redirect('/contacts')
    })
}

const contact_edit = (req, res) => {
    const { id } = req.params;

    Contact.findById(id, (err, contact) => {
        if(err) throw err;
        return res.render('contacts/edit', { contact })
    })
}

const contact_update = (req, res) => {
    const { id } = req.params;
    const { name, phone } = req.body;

    Contact.findByIdAndUpdate(id, { name, phone }, (err, contact) => {
        if(err) throw err;
        return res.redirect('/contacts')
    })
}

const contact_delete = (req, res) => {
    const { id } = req.params;

    Contact.findByIdAndDelete(id, (err, contact) => {
        if(err) throw err;
        return res.redirect('/contacts')
    })
}

module.exports = {
    contacts_list,
    contact_add,
    contact_store,
    contact_edit,
    contact_update,
    contact_delete
}



