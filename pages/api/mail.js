export default (req, res) => {
  if (req.method === "POST") {
    const { name, from, message } = req.body;

    var api_key = "07df993f149baa7963e6df5f44a9a7d3-468bde97-aa63cfb1";
    //var domain = "mg.caqophony.com";
    // var domain = "sandboxe8d4ea9d73034098a547f4c7007d7f0a.mailgun.org";
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

/*
{
    "web":{
        "client_id":"907024976593-dh568ubgom2evbvdf9puvigjf05t7dqc.apps.googleusercontent.com",
        "project_id":"quickstart-1592888829168",
         "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
         "client_secret":"FB8yLWwZ1Qp8-QBtNiCz6950",
         "javascript_origins":["http://caqophony.com"]}
    }
*/
