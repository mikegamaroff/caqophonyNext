const { sendMail } = require("./api/mail.js");
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cors());
  server.use(bodyParser());

  server.post("/api/send", sendMail);

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Server started at port ${port}`);
    }
  });
});
/*
export async function Mailer(props) {
  let transporter = nodemailer.createTransport({
    serivce: "gmail",
    secure: false,
    port: 25,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let HelperOptions = {
    from: props.from,
    to: "mike@gamaroff.net",
    subject: "Caqophony Email",
    text: props.name + " just sent you a message: <br>" + props.message,
  };

  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      console.log("Message was sent");
    }
  });
}
 */
