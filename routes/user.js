const express = require('express');
const bodyparser = require ("body-parser");
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const config = require('../config')

var db = require('../db');

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));



  
router.get('/', (req, res) => {
    let sql="SELECT * FROM users"
    let query = db.query(sql, (err, result) => {
        if(err) throw err;

        // console.log(result); 
        res.send(result);  
    });
});




router.post('/',async (req, res) => {

    var { name, email, password } = req.body;
    // name ="unknown"
    let sql = `SELECT * FROM users WHERE email='${email}'`;

    let query = db.query(sql,async (err,result)=>{
      if(err) throw err;
      // console.log(result)
      if(result.length>0){
        res.json({msg:'Email already Exist'})
      }
      else{
        
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        
        let post = {name,email,password};

        let sql = 'INSERT INTO users SET ?';
        let query = db.query(sql, post, (err, result) => {
            if(err) throw err;
            
            const payload = {
                user: {
                  id: result.insertId
                }
              };
    
              jwt.sign(
                payload,
                "my secret",
                { expiresIn: 360000 },
                (err, token) => {
                  if (err) throw err;
                  res.json({ token });
                  // res.json({ email });
                  // res.json({ password });
                }
              );
    
        });
      }
    })
 
});






module.exports = router;