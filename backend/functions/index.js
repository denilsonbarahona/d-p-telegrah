const functions = require("firebase-functions");
const app = require("./API/api");

exports.app = functions.https.onRequest(app);
