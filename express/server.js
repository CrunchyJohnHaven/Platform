console.log('********* SERVER **********');
// variables
const port = 8000
// requirements
let mongoose = require('mongoose');
let validate = require('mongoose-validator');
let express = require('express');
let bodyparser = require('body-parser');
let path = require('path');
let app = express();

mongoose.Promise = global.Promise;

// use
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/DeveloperMarketplace/dist"));

//connection
mongoose.connect("mongodb://localhost/PostsAPI");

// test routes connection
let Schema = mongoose.Schema;
let PostSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  phone_number: {
    type: String
  },
  company: {
    type: String
  },
  message: {
    type: String
  }
}, { timestamps: true });


Post = mongoose.model('Contact', PostSchema);

// app.get('/post', function (req, res) {
//   console.log('****** Get ALL POSTS - ******');
//   Post.find({}, function (err, data) {
//     if (err) {
//       // console.log(' ******* ERROR at GET ALL route ****** : ', data);
//       res.json({ message: "Error", error: err });
//     } else {
//       console.log(' ******* SUCCESS at GET ALL route ****** : ', data);
//       res.json({ message: "Success", data: data });
//     }
//   })
// });

app.post('/post', function (req, res) {
  console.log('****** POST CONTACT - ******', req.body);
  var post = new Post({ first_name: req.body.firstName, last_name: req.body.lastName, email: req.body.email, phone_number: req.body.phoneNumber, company: req.body.company, message: req.body.message });
  post.save(function (err, data) {
    if (err) {
      console.log("ERRORS at POST route.js: ", err);
      res.json({ message: "Error", error: err });
    } else {
      res.json({ message: "Success", data: data });
      console.log('****** SERVER - POST CONTACT: ', data)
    }
  });
});
// ****** POST CONTACT - ****** { firstName: 'aaaa',
//   lastName: 10,
//   email: 'jhb',
//   phoneNumber: '111',
//   company: 'sapper!',
//   message: 'Helloooo!' }
// ****** SERVER - POST CONTACT:  { _id: 5ad7a4ef5cb9220a466f8191,
//   first_name: 'aaaa',
//   last_name: '10',
//   email: 'jhb',
//   phone_number: '111',
//   company: 'sapper!',
//   message: 'Helloooo!',
//   createdAt: 2018-04-18T20:05:03.011Z,
//   updatedAt: 2018-04-18T20:05:03.011Z,
//   __v: 0 }


app.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./DeveloperMarketplace/dist/index.html'));
});

app.listen(port, function () {
  console.log(`Developer Marketplace is listening on ${port} `);
});





// https://app.sendgrid.com/guide/integrate/langs/nodejs
// "sappercodinglogin" 
// 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
// https://accounts.google.com/o/oauth2/auth?client_id=563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=689467884&redirect_uri=http%3A%2F%2Flocalhost%3A9005

// echo "export SENDGRID_API_KEY='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'" > sendgrid.env
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env

// firebase functions:config:set sendgrid.key=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
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);


    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const msg = {
    //   to: 'johnhavenbradley@sappercoding.com',
    //   from: 'johnhavenbradley@gmail.com',
    //   subject: 'New Contact Request From SCoding',
    //   text: 'First Name: {{newContact.firstName}} Last Name: {{newContact.lastName}}',
    //   html: '<strong>First Name: {{newContact.firstName}} Last Name: {{newContact.lastName}}</strong>',
    // };
    // sgMail.send(msg);
    // // return this._http.post('/contact', newContact);