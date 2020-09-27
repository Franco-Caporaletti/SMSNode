const SMS = require("../models/sms");
const { sendMessage } = require("../twilio/send-sms");

const MessagingReponse = require("twilio").twiml.MessagingResponse;

const { getSocket } = require("../sockets");

const indexController = async (req, res) => {
  // Encuentra todos los mensajes guardados
  const messages = await SMS.find().sort("-createdAt").lean();
  res.render("index", {
    messages: messages,
  });
};

const postMessage = async (req, res) => {
  const { message, phone } = req.body;

  if (!message || !phone) return res.json('Missing message or phone');

  // Envía un SMS con el mensaje
  const result = await sendMessage(message, phone);

  // registrar el ID de SMS
  console.log(result.sid);

  // Guardar el SMS en la base de datos
  await SMS.create({ Body: req.body.message, From: req.body.phone });

  res.redirect('/');
};

const receiveMessage = async (req, res) => {
  const twiml = new MessagingReponse();

  // Recibir el SMS
  console.log(req.body.Body);
  // console.log(req.body.From)

  // Guardar el SMS en la base de datos
  const savedSMS = await SMS.create({
    Body: req.body.Body,
    From: req.body.From,
  });

  getSocket().emit("new message", savedSMS);

  res.writeHead(200, { "Content-Type": "text/xml" });
  // twiml.message('This is my response'); respuesta automatica
  // console.log(twiml.toString())

  // Reponse Back SMS
  res.end(twiml.toString());
};

module.exports = {
  indexController,
  postMessage,
  receiveMessage,
};
