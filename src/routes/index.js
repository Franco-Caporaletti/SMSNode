const { Router } = require("express");
const router = Router();

const {
  indexController,
  postMessage,
  receiveMessage
} = require("../controllers/index.controller");

// Ruta principal
router.get("/", indexController);

//Envia un SMS
router.post("/send-sms", postMessage);

//Recive SMS
router.post('/sms', receiveMessage);

module.exports = router;
