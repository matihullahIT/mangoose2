//how to make signup api that take file both file and data as input using nodejs?

// Select your input type file and store it in a variable
const input = document.getElementById('fileinput');

// This will upload the file after having read it
const upload = (file) => {
  fetch('http://www.example.net', { // Your POST endpoint
    method: 'POST',
    headers: {
      // Content-Type may need to be completely **omitted**
      // or you may need something
      "Content-Type": "You will perhaps need to define a content-type here"
    },
    body: file // This is your file object
  }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => console.log(success) // Handle the success response object
  ).catch(
    error => console.log(error) // Handle the error response object
  );
};

// Event handler executed when a file is selected
const onSelectFile = () => upload(input.files[0]);

// Add a listener on your input
// It will be triggered when a file will be selected
input.addEventListener('change', onSelectFile, false);



    //the simple example of login// 
    
    router.post('/users/login', function (req, res) {
                        var users = req.app;
                        var email = req.body.email;
                        var password = req.body.password;
                        if (email.length > 0 && password.length > 0) {
                            users.findOne({email: email, password: password}, function (err, user) {
                                if (err) {
                                    res.json({status: 0, message: err});
                                }
                                if (!user) {
                                    res.json({status: 0, msg: "not found"});
                                }
                                res.json({status: 1, id: user._id, message: " success"});
                            })
                        } else {
                            res.json({status: 0, msg: "Invalid Fields"});
                        }
                    });
            
                //and if you have to create schema 
            
             var db_schema = new Schema({
                            email: {type: String, required: true, unique: true},
                            password: {type: String, required: true, unique: true},
                        });
            // define this in your db.js
                  var login_db = mongoose.model('your_db_name', db_schema);
                    return function (req, res, next) {
                            req.app = login_db;
                            next();
                        }; 