const Newsletter = require("../Model/newsletter") 
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'johari9292@gmail.com',
    pass: 'ishaq119821885'
  }
});

exports.addnewsletter = (req, res) => {
   Newsletter.insertMany({
        
        name:req.params.firstname,
       
        emailsub:req.params.email,
      
        
       
     }).then(newsletter => {
            res.status(200).json({ 'newsletter': 'newsletter added successfully' });
            console.log("newsletter added succesfully ")
          
            var mailOptions = {
                from: 'johari9292@gmail.com',
                to: 'marcin.chudeusz@dext.ai',
                // to:'joharibalti1996@gmail.com',
                 subject: 'Thier is  new Subscriber for you. Detail is following',
                text:"\nHere is your new subscriber detail\nName:     " +req.params.name +
                     "\nEmail:      "+req.params.emailsub
                     
                
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
            res.status(400).send('adding new newsletter failed');
        });
}
