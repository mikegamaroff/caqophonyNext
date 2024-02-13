export default (req, res) => {
  if (req.method === "POST") {
    const { name, from, message } = req.body;

    var api_key = process.env.MAILGUN_KEY;
    var domain = "mg.caqophony.com";
    var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

    var data = {
      from: `${name} <${from}>`,
      to: "mike@gamaroff.com",
      subject: "Caqophony Mail form",
      text: `${name} just sent you an email.  ${message}`,
      html: `${name} just sent you an email.<br><br>${message}`,
    };

    mailgun.messages().send(data, function (error, body) {
      if (error) {
        return res.json(error);
      } else {
        return res.json(body);
      }
    });
  } else {
  }
};
