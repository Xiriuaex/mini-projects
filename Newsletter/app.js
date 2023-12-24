const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request"); //require all of the packages we installed
const { stringify } = require("querystring");
const { json } = require("express/lib/response");
const res = require("express/lib/response");
const app = express(); // creating app const. A new instance of express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); //for static files
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});
app.post("/", function (req, res) {
  const fN = req.body.fName;

  const lN = req.body.lname;

  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merger_field: { FNAME: fN, LNAME: lN },
      },
    ],
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us11.api.mailchimp.com/3.0/lists/e3e971c84a";

  const options = {
    method: "POST",
    auth: "pragyan:c4ffdf7c8fd6703c68ff13fb16d7f05c-us11",
  };
  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server is running on port 3000");
});

// kuchBhi1!
// c4ffdf7c8fd6703c68ff13fb16d7f05c-us11 API
//e3e971c84a audience ID
