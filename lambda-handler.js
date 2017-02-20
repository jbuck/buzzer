'use strict';

const twilio = require("twilio");

const OWNER_NUMBERS = process.env.OWNER_NUMBERS.split(",");

module.exports.buzzer = (event, context, callback) => {
  const twiml = new twilio.TwimlResponse();
  twiml
    .play({digits: "www9www"});

  OWNER_NUMBERS.forEach((phone) => {
    twiml.sms("Someone buzzed in!", {to: phone});
  });

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/xml; charset=utf-8"
    },
    body: twiml.toString(),
  };

  callback(null, response);
};
