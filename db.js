var mysql = require('mysql');

 const db = mysql.createConnection({
   host     : 'localhost',
   user     : 'susi',
   password : 'SeSTA@2011',
   database : 'susi', 
   // port:8889,
  
 });


// const db = mysql.createConnection({
//   host    : 'd1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//   user     : 'zu0qtl0m23cr5jf0',
//   password : 'cr0fxd0r70iuh2m7',
//   database : 'sxs6fatsc4vxudb7', 
//   port:3306,  
// });

db.connect((err) => {
  if(err){
      throw err;
  }
  console.log('MySql Connected...');
});

module.exports = db;

// npm run devter