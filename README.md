# Node SMS APP with Twilio
this is an simple example to send and recive SMS using Node, Twilio, Mongodb, and Socket.io
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

# Preview
![SMSNode](https://user-images.githubusercontent.com/63564492/94378005-2f48f080-00fc-11eb-8a71-1486586df8c3.png)
