const express = require('express');
const bodyparser = require ("body-parser");
const app = express();
const router = express.Router();
const auth = require('../middleware/auth');
var db = require('../db');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

router.post('/block',(req,res)=>{
    const {block_name} = req.body;
    

    let post ={block_name}

    let sql = 'INSERT INTO block SET ?';   
    let query = db.query(sql, post, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        let id = result.insertId;
        
        res.json({
            msg:"Block saved successfully",
            id
        })

    });
})

router.post('/gp',(req,res)=>{
    const {GP_name,block_id} = req.body;
    

    let post ={GP_name,block_id}

    let sql = 'INSERT INTO gp SET ?';   
    let query = db.query(sql, post, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        let id = result.insertId;
        
        res.json({
            msg:"GP saved successfully",
            id
        })

    });
})

router.post('/village',(req,res)=>{
    const {GP_id,village_name} = req.body;
    

    let post ={GP_id,village_name}

    let sql = 'INSERT INTO village SET ?';   
    let query = db.query(sql, post, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        let id = result.insertId;
        
        res.json({
            msg:"Village saved successfully",
            id
        })

    });
})

router.post('/shg',(req,res)=>{
    const {vill_id,shg_name} = req.body;
    

    let post ={vill_id,shg_name}

    let sql = 'INSERT INTO shg SET ?';   
    let query = db.query(sql, post, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        let id = result.insertId;
        
        res.json({
            msg:"SHG saved successfully",
            id
        })

    });
})

router.get('/gp',(req,res)=>{

    let sql = `SELECT * FROM gp LEFT JOIN block ON gp.block_id = block.id`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.get('/village',(req,res)=>{

    let sql = `SELECT * FROM village LEFT JOIN gp ON village.GP_id = gp.gp_id`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})



router.get('/shg',(req,res)=>{

    let sql = `SELECT * FROM shg LEFT JOIN village ON shg.vill_id = village.vill_id`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})









router.post('/block/delete',(req,res)=>{
	const {id}= req.body;
    let sql = `DELETE FROM block WHERE id = '${id}'`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/gp/delete',(req,res)=>{
	const {id}= req.body;
    let sql = `DELETE FROM gp WHERE gp_id = '${id}'`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.post('/vill/delete',(req,res)=>{
	const {id}= req.body;
    let sql = `DELETE FROM village WHERE vill_id = '${id}'`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/shg/delete',(req,res)=>{
	const {id}= req.body;
    let sql = `DELETE FROM shg WHERE shg_id = '${id}'`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})





router.post('/block/edit',(req,res)=>{

	const {id,block_name} = req.body;

    let sql = `UPDATE block SET block_name='${block_name}' WHERE id = '${id}'`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})




module.exports = router;