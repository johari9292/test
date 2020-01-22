const Popup = require("../Model/newsletter")
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'johari9292@gmail.com',
    pass: 'ishaq119821885'
  }
});


exports.addpopup = (req, res) => {
    // let popup = new Popup(req.body);
    
   var arr =""
   console.log("here is dirst param",req.params.firstname)
    Popup.insertMany({
        
        firstname:req.params.firstname,
        lastname:req.params.lastname,
        email:req.params.email,
        phone:req.params.phone,
        job:req.params.job,
        question:req.params.question
        
       
     }).then(popup => {
            res.status(200).json({ 'popup': 'popup added successfully' });
            console.log("popup added succesfully ")
          
            var mailOptions = {
                from: 'johari9292@gmail.com',
                to: 'marcin.chudeusz@dext.ai',
                // to:'joharibalti1996@gmail.com',
                 subject: 'thier is new demo request',
                text:"\nfirstname:     " +req.params.firstname +
                     "\nlastname:      "+req.params.lastname+
                     "\nemail:         "+req.params.email+
                     "\nphone:         "+req.params.phone+
                     "\njob:           " + req.params.job +
                     "\nquestion:      "+ req.params.question
                
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        })
        .catch(err => {
            res.status(400).send('adding new popup failed');
        });
}