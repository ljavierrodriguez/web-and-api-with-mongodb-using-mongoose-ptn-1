const Contact = require("../models/contact")

const contacts = async (req, res) => {
    const contacts = await Contact.find({})

    return res.status(200).json({
        status: 'Success',
        message: 'Contacts List',
        data: contacts
    })
}

const createContact = async (req, res) => {

    const { name, phone } = req.body;

    const newContact = await Contact.create({ name, phone });

    const contact = await newContact.save()

    return res.status(201).json({
        status: 'Success',
        message: 'Contact Created',
        data: contact
    })
}

const updateContact = async (req, res) => {
    const { id } = req.params;
    const { name, phone } = req.body;

    await Contact.findByIdAndUpdate(id, { name, phone });

    return res.status(204).json({
        status: 'Success',
        message: 'Contact Updated',
        data: null
    })
}

const deleteContact = async (req, res) => {
    const { id } = req.params;

    await Contact.findByIdAndDelete(id);

    return res.status(200).json({
        status: 'Success',
        message: 'Contact Deleted',
        data: null
    })
}


module.exports = {
    contacts,
    createContact,
    updateContact,
    deleteContact
}