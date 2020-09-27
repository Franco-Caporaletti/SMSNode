const config = require("../config");
const client = require("twilio")(config.accountSid, config.authToken);

/**
 * Envia un SMS
 * @param {string} body - Este es el cuerpo del mensaje a enviar
 * @param {string} phone - Este es el numero de telefono
 */

async function sendMessage(body, phone) {
  try {
    const message = await client.messages.create({
      to: phone,
      from: process.env.PHONE_NUMBER,
      body,
    });
    return message;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { sendMessage };
