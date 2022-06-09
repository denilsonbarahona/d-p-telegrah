const express = require("express");
const cors = require("cors");
const contactController = require("../controllers/contacts.js");
const db = require("../entities/firestore");
const app = express();
app.use(cors());

app.get("/api/contacts", contactController.getContact({ db }));
app.get("/api/contacts/:id", contactController.getContactById({ db }));
app.post("/api/contacts", contactController.createContact({ db }));

module.exports = app;
