const express = require('express');
const mysql = require('mysql');
const bodyparser = require ("body-parser");
var cors = require('cors');
const app = express();
var db = require('./db');
 
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));




app.use('/api/users', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/baseline', require('./routes/baseline'));
app.use('/api/midline',require('./routes/midline'));
app.use('/api/data',require('./routes/data'));
app.use('/api/master',require('./routes/master'));


app.get('/',(req,res)=>{
    res.send('server up')
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));