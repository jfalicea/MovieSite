var express = require('express');
var router = express.Router();
const db = require('../db')

/********************************************************************
POST - registeration page
********************************************************************/
router.post('/registerProcess',(req,res,next)=>{
  const email=req.body.email;
  const username=req.body.username;
  const password=req.body.password;
  const password2=req.body.password2;

  const insertUserQuery = `INSERT INTO users (username,email,password)
  VALUES
  ($1,$2,$3)
  returning id
  `
  db.one(insertUserQuery,[username,email,password]).then((resp)=>{
    res.json({
      msg: "useradded"
    })
  })

});



router.get('/register', (req, res, next)=> {
  res.render('register')
})


module.exports = router;
