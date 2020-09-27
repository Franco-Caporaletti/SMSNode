# Node SMS APP with Twilio
SMSNode es un proyecto que realice para dar foco en NodeJS utilizando Twilio, Socket.io y Mongodb. En el mismo proyecto se puede realizar el envió y la recepción de mensajes SMS
![](./SMSnode.png)

# Required Software
* Nodejs
* Mongodb
* ngrok (in development). Twilio needs a domain to reach our server.

# Installation
clone the repo
create a file with the name `.env` in the root project with the following Environment variables:
```text
TWILIO_ACCOUNT_SID=<YOUR TWILIO ACCOUNT SID>
TWILIO_AUTH_TOKEN=<YOUR TWILIO AUTH TOKEN>
PHONE_NUMBER=<THE TRIAL PHONE NUMBER OF YOUR TWILIO PROJECT>
```
then execute:
```shell
npm i
npm npm run dev (to execute with nodemon)
```

# Environment variables
* TWILIO_ACCOUNT_SID
* TWILIO_AUTH_TOKEN
* PHONE_NUMBER
* PORT (optional)
