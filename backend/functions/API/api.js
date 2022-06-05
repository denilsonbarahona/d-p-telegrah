const express = require("express");
const contactController = require("../controllers/contacts.js");
const db = require("../entities/firestore");
const app = express();

app.get("/contacts", contactController.getContact({ db }));
app.get("/contacts/:id", contactController.getContactById({ db }));
app.post("/contacts", contactController.createContact({ db }));

module.exports = app;
