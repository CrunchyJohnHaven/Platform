console.log('********* SERVER **********');
// variables
const port = 8000
// requirements
let mongoose = require( 'mongoose' );
let validate = require('mongoose-validator');    
let express = require( 'express' );
let bodyparser = require( 'body-parser' );
let path = require( 'path' );
let app = express();

mongoose.Promise = global.Promise;

// use
app.use( bodyparser.urlencoded( {extended: true } ) );
app.use( bodyparser.json());
app.use( express.static( __dirname + "/DeveloperMarketplace/dist" ) );

//connection
mongoose.connect( "mongodb://localhost/PostsAPI" );

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
    comment: {
      type: String
    }
  }, {timestamps: true});
  Post = mongoose.model('Product', PostSchema);
  
  app.get('/post', function(req, res){
    console.log('****** Get ALL POSTS - ******');
    Post.find({}, function(err, data){
        if (err) {
            // console.log(' ******* ERROR at GET ALL route ****** : ', data);
            res.json({message: "Error", error: err});
        } else {
            console.log(' ******* SUCCESS at GET ALL route ****** : ', data);
            res.json({message: "Success", data : data});
        }  
    })
  });

  app.post('/post', function(req, res) {
    console.log('****** POST COMMENT - ******');
    var post = new Post({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, comment: req.body.comment});
    post.save(function(err, data) {
        if (err) {
            console.log("ERRORS at POST route.js: ", err);
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Success", data : data});
            console.log('****** SERVER - POST PRODUCT: ', data)
        }
    });
});

app.all('*', (req,res, next) => {
    res.sendFile(path.resolve('./DeveloperMarketplace/dist/index.html'));
});

app.listen(port, function(){
    console.log(`Developer Marketplace is listening on ${port} `);
});




// {
//     "first_name": "John",
//     "Last_name": "Bradley",
//     "email": "johnhavenbradley@gmail.com",
//     "comment": "This is a comment"
// }

// {
//     "message": "Success",
//     "data": {
//         "_id": "5ac2af28937ec8daf6cb1977",
//         "createdAt": "2018-04-02T22:31:04.992Z",
//         "updatedAt": "2018-04-02T22:31:04.992Z",
//         "__v": 0
//     }
// }
