var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const Todomodel = require('./users')


mongoose.connect(
  "mongodb+srv://sy9034431150:sahil123@firstd.vklel9n.mongodb.net/instadata",
);

 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.post('/add',function(req,res,next){
  const username = req.body.id
  const password = req.body.password
  

  const formData = new Todomodel({username,password});

  // Save the form data to MongoDB
  formData.save()
  res.render('display')

  // .then(result =>
  //  res.status(200).send('task')
  // .catch(err=> res.json(err))
})

//  saves.save()
// })



module.exports = router;
