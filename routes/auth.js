const express = require('express');
const bodyparser = require ("body-parser");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db')
var mysql = require('mysql');
var auth = require('../middleware/auth')


router.get('/', auth, async (req, res) => {

  let sql = "SELECT id,name,email FROM users WHERE email = "+ JSON.stringify(req.user.id);
  let query = db.query(sql, async(err, result) => {
      if(err) throw err;
      res.send(result)

    })

});


router.post('/', async (req, res) => {

    var {  email, password } = req.body;

    var email = JSON.stringify(email);

    let sql = "SELECT * FROM users WHERE email = "+ email;
    let query = db.query(sql, async(err, result) => {
        if(err) throw err;

        const isMatch = await bcrypt.compare(password, result[0].password);
        // console.log(isMatch)
        // res.json(result)
        if(!isMatch){
            res.json({msg:'Invalaid Username or Password'})
        }


        const payload = {
            user: {
              id: result[0].email
            }
          };


          jwt.sign(
            payload,
            "jwtSecret",
            { expiresIn: 360000 },
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
          );
    });


});

module.exports = router;
