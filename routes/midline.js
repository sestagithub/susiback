const express = require('express');
const bodyparser = require ("body-parser");
const app = express();
const router = express.Router();
const auth = require('../middleware/auth');
var db = require('../db');


router.post('/crop',async (req,res)=>{

    const { id,farmer_id,kharif_crop1_name,kharif_crop1_area,kharif_crop1_cost,kharif_crop1_production,kharif_crop1_income,kharif_crop2_name,kharif_crop2_area,kharif_crop2_cost,kharif_crop2_production,kharif_crop2_income,
        kharif_crop3_name,kharif_crop3_area,kharif_crop3_cost,kharif_crop3_production,kharif_crop3_income,kharif_crop4_name,kharif_crop4_area,kharif_crop4_cost,kharif_crop4_production,kharif_crop4_income,
        Rabi_crop1_name,Rabi_crop1_area,Rabi_crop1_cost,Rabi_crop1_production,Rabi_crop1_income,Rabi_crop2_name,Rabi_crop2_area,Rabi_crop2_cost,Rabi_crop2_production,Rabi_crop2_income,
        Rabi_crop3_name,Rabi_crop3_area,Rabi_crop3_cost,Rabi_crop3_production,Rabi_crop3_income,Rabi_crop4_name,Rabi_crop4_area,Rabi_crop4_cost,Rabi_crop4_production,Rabi_crop4_income,
        Summer_crop1_name,Summer_crop1_area,Summer_crop1_cost,Summer_crop1_production,Summer_crop1_income,Summer_crop2_name,Summer_crop2_area,Summer_crop2_cost,Summer_crop2_production,Summer_crop2_income,
        Summer_crop3_name,Summer_crop3_area,Summer_crop3_cost,Summer_crop3_production,Summer_crop3_income,Summer_crop4_name,Summer_crop4_area,Summer_crop4_cost,Summer_crop4_production,Summer_crop4_income,
        } = req.body;
    
        var year = new Date().getFullYear();

    let sql = `SELECT * FROM midline_crop_income WHERE farmer_id=${farmer_id} AND year=${year} `;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        
        if(result.length==0){
            const { farmer_id,kharif_crop1_name,kharif_crop1_area,kharif_crop1_cost,kharif_crop1_production,kharif_crop1_income,kharif_crop2_name,kharif_crop2_area,kharif_crop2_cost,kharif_crop2_production,kharif_crop2_income,
                kharif_crop3_name,kharif_crop3_area,kharif_crop3_cost,kharif_crop3_production,kharif_crop3_income,kharif_crop4_name,kharif_crop4_area,kharif_crop4_cost,kharif_crop4_production,kharif_crop4_income,
                Rabi_crop1_name,Rabi_crop1_area,Rabi_crop1_cost,Rabi_crop1_production,Rabi_crop1_income,Rabi_crop2_name,Rabi_crop2_area,Rabi_crop2_cost,Rabi_crop2_production,Rabi_crop2_income,
                Rabi_crop3_name,Rabi_crop3_area,Rabi_crop3_cost,Rabi_crop3_production,Rabi_crop3_income,Rabi_crop4_name,Rabi_crop4_area,Rabi_crop4_cost,Rabi_crop4_production,Rabi_crop4_income,
                Summer_crop1_name,Summer_crop1_area,Summer_crop1_cost,Summer_crop1_production,Summer_crop1_income,Summer_crop2_name,Summer_crop2_area,Summer_crop2_cost,Summer_crop2_production,Summer_crop2_income,
                Summer_crop3_name,Summer_crop3_area,Summer_crop3_cost,Summer_crop3_production,Summer_crop3_income,Summer_crop4_name,Summer_crop4_area,Summer_crop4_cost,Summer_crop4_production,Summer_crop4_income,
                } = req.body;
            

            var kharif_crop1_net_income = Number(kharif_crop1_income) - Number(kharif_crop1_cost);
            var kharif_crop2_net_income = Number(kharif_crop2_income) - Number(kharif_crop2_cost);
            var kharif_crop3_net_income = Number(kharif_crop3_income) - Number(kharif_crop3_cost);
            var kharif_crop4_net_income = Number(kharif_crop4_income) - Number(kharif_crop4_cost);
            var Rabi_crop1_net_income = Number(Rabi_crop1_income) - Number(Rabi_crop1_cost);
            var Rabi_crop2_net_income = Number(Rabi_crop2_income) - Number(Rabi_crop2_cost);
            var Rabi_crop3_net_income = Number(Rabi_crop3_income) - Number(Rabi_crop3_cost);
            var Rabi_crop4_net_income = Number(Rabi_crop4_income) - Number(Rabi_crop4_cost);
            var Summer_crop1_net_income = Number(Summer_crop1_income) - Number(Summer_crop1_cost);
            var Summer_crop2_net_income = Number(Summer_crop2_income) - Number(Summer_crop2_cost);
            var Summer_crop3_net_income = Number(Summer_crop3_income) - Number(Summer_crop3_cost);
            var Summer_crop4_net_income = Number(Summer_crop4_income) - Number(Summer_crop4_cost);

            var total_crop_gross_income = Number(kharif_crop1_income)+Number(kharif_crop2_income)+Number(kharif_crop3_income)+Number(kharif_crop4_income)+Number(Rabi_crop1_income)+Number(Rabi_crop2_income)+Number(Rabi_crop3_income)+Number(Rabi_crop4_income)+Number(Summer_crop1_income)+Number(Summer_crop2_income)+Number(Summer_crop3_income)+Number(Summer_crop4_income);
        
                var mid_total_crop_net_income = Number(kharif_crop1_net_income)+Number(kharif_crop2_net_income)+Number(kharif_crop3_net_income)+Number(kharif_crop4_net_income)+Number(Rabi_crop1_net_income)+Number(Rabi_crop2_net_income)+Number(Rabi_crop3_net_income)+Number(Rabi_crop4_net_income)+Number(Summer_crop1_net_income)+Number(Summer_crop2_net_income)+Number(Summer_crop3_net_income)+Number(Summer_crop4_net_income);
        
    
       
        let post ={farmer_id,kharif_crop1_name,kharif_crop1_area,kharif_crop1_cost,kharif_crop1_production,kharif_crop1_income,kharif_crop1_net_income,kharif_crop2_name,kharif_crop2_area,kharif_crop2_cost,kharif_crop2_production,kharif_crop2_income,kharif_crop2_net_income,kharif_crop3_name,kharif_crop3_area,kharif_crop3_cost,kharif_crop3_production,kharif_crop3_income,kharif_crop3_net_income,kharif_crop4_name,kharif_crop4_area,kharif_crop4_cost,kharif_crop4_production,kharif_crop4_income,kharif_crop4_net_income,Rabi_crop1_name,Rabi_crop1_area,Rabi_crop1_cost,Rabi_crop1_production,Rabi_crop1_income,Rabi_crop1_net_income,Rabi_crop2_name,Rabi_crop2_area,Rabi_crop2_cost,Rabi_crop2_production,Rabi_crop2_income,Rabi_crop2_net_income,Rabi_crop3_name,Rabi_crop3_area,Rabi_crop3_cost,Rabi_crop3_production,Rabi_crop3_income,Rabi_crop3_net_income,Rabi_crop4_name,Rabi_crop4_area,Rabi_crop4_cost,Rabi_crop4_production,Rabi_crop4_income,Rabi_crop4_net_income,Summer_crop1_name,Summer_crop1_area,Summer_crop1_cost,Summer_crop1_production,Summer_crop1_income,Summer_crop1_net_income,Summer_crop2_name,Summer_crop2_area,Summer_crop2_cost,Summer_crop2_production,Summer_crop2_income,Summer_crop2_net_income,Summer_crop3_name,Summer_crop3_area,Summer_crop3_cost,Summer_crop3_production,Summer_crop3_income,Summer_crop3_net_income,Summer_crop4_name,Summer_crop4_area,Summer_crop4_cost,Summer_crop4_production,Summer_crop4_income,Summer_crop4_net_income,total_crop_gross_income,mid_total_crop_net_income,year}

        let sql = 'INSERT INTO midline_crop_income SET ?';   
        let query = db.query(sql, post, (err, result) => {
                if(err) {
                    res.json(err.sqlMessage)
                }
                let id = result.insertId;
                
                res.json({
                    msg:"Midline Crop saved successfully",
                    id
                })

            });

                
        }else{
            res.json({
                msg:"Data already exists"
            })


            // const { farmer_id,kharif_crop1_name,kharif_crop1_area,kharif_crop1_cost,kharif_crop1_production,kharif_crop1_income,kharif_crop2_name,kharif_crop2_area,kharif_crop2_cost,kharif_crop2_production,kharif_crop2_income,
            //     kharif_crop3_name,kharif_crop3_area,kharif_crop3_cost,kharif_crop3_production,kharif_crop3_income,kharif_crop4_name,kharif_crop4_area,kharif_crop4_cost,kharif_crop4_production,kharif_crop4_income,
            //     Rabi_crop1_name,Rabi_crop1_area,Rabi_crop1_cost,Rabi_crop1_production,Rabi_crop1_income,Rabi_crop2_name,Rabi_crop2_area,Rabi_crop2_cost,Rabi_crop2_production,Rabi_crop2_income,
            //     Rabi_crop3_name,Rabi_crop3_area,Rabi_crop3_cost,Rabi_crop3_production,Rabi_crop3_income,Rabi_crop4_name,Rabi_crop4_area,Rabi_crop4_cost,Rabi_crop4_production,Rabi_crop4_income,
            //     Summer_crop1_name,Summer_crop1_area,Summer_crop1_cost,Summer_crop1_production,Summer_crop1_income,Summer_crop2_name,Summer_crop2_area,Summer_crop2_cost,Summer_crop2_production,Summer_crop2_income,
            //     Summer_crop3_name,Summer_crop3_area,Summer_crop3_cost,Summer_crop3_production,Summer_crop3_income,Summer_crop4_name,Summer_crop4_area,Summer_crop4_cost,Summer_crop4_production,Summer_crop4_income,
            //     } = req.body;
            
        
            //     var kharif_crop1_net_income = kharif_crop1_income - kharif_crop1_cost;
            //     var kharif_crop2_net_income = kharif_crop2_income - kharif_crop2_cost;
            //     var kharif_crop3_net_income = kharif_crop3_income - kharif_crop3_cost;
            //     var kharif_crop4_net_income = kharif_crop4_income - kharif_crop4_cost;
            //     var Rabi_crop1_net_income = Rabi_crop1_income - Rabi_crop1_cost;
            //     var Rabi_crop2_net_income = Rabi_crop2_income - Rabi_crop2_cost;
            //     var Rabi_crop3_net_income = Rabi_crop3_income - Rabi_crop3_cost;
            //     var Rabi_crop4_net_income = Rabi_crop4_income - Rabi_crop4_cost;
            //     var Summer_crop1_net_income = Summer_crop1_income - Summer_crop1_cost;
            //     var Summer_crop2_net_income = Summer_crop2_income - Summer_crop2_cost;
            //     var Summer_crop3_net_income = Summer_crop3_income - Summer_crop3_cost;
            //     var Summer_crop4_net_income = Summer_crop4_income - Summer_crop4_cost;
        
        
            //     var total_crop_gross_income = Number(kharif_crop1_income)+Number(kharif_crop2_income)+Number(kharif_crop3_income)+Number(kharif_crop4_income)+Number(Rabi_crop1_income)+Number(Rabi_crop2_income)+Number(Rabi_crop3_income)+Number(Rabi_crop4_income)+Number(Summer_crop1_income)+Number(Summer_crop2_income)+Number(Summer_crop3_income)+Number(Summer_crop4_income);
        
            //     var total_crop_net_income = Number(kharif_crop1_net_income)+Number(kharif_crop2_net_income)+Number(kharif_crop3_net_income)+Number(kharif_crop4_net_income)+Number(Rabi_crop1_net_income)+Number(Rabi_crop2_net_income)+Number(Rabi_crop3_net_income)+Number(Rabi_crop4_net_income)+Number(Summer_crop1_net_income)+Number(Summer_crop2_net_income)+Number(Summer_crop3_net_income)+Number(Summer_crop4_net_income);
        
            //     let id  =result[0].id ;

            
            
            // let sql = `UPDATE midline_crop_income SET 
            // kharif_crop1_name='${kharif_crop1_name}',kharif_crop1_area='${kharif_crop1_area}',kharif_crop1_cost='${kharif_crop1_cost}',kharif_crop1_production='${kharif_crop1_production}',kharif_crop1_income='${kharif_crop1_income}',kharif_crop1_net_income='${kharif_crop1_net_income}',kharif_crop2_name='${kharif_crop2_name}',kharif_crop2_area='${kharif_crop2_area}',kharif_crop2_cost='${kharif_crop2_cost}',kharif_crop2_production='${kharif_crop2_production}',kharif_crop2_income='${kharif_crop2_income}',kharif_crop2_net_income='${kharif_crop2_net_income}',kharif_crop3_name='${kharif_crop3_name}',kharif_crop3_area='${kharif_crop3_area}',kharif_crop3_cost='${kharif_crop3_cost}',kharif_crop3_production='${kharif_crop3_production}',kharif_crop3_income='${kharif_crop3_income}',kharif_crop3_net_income='${kharif_crop3_net_income}',kharif_crop4_name='${kharif_crop4_name}',kharif_crop4_area='${kharif_crop4_area}',kharif_crop4_cost='${kharif_crop4_cost}',kharif_crop4_production='${kharif_crop4_production}',kharif_crop4_income='${kharif_crop4_income}',kharif_crop4_net_income='${kharif_crop4_net_income}',Rabi_crop1_name='${Rabi_crop1_name}',Rabi_crop1_area='${Rabi_crop1_area}',Rabi_crop1_cost='${Rabi_crop1_cost}',Rabi_crop1_production='${Rabi_crop1_production}',Rabi_crop1_income='${Rabi_crop1_income}',Rabi_crop1_net_income='${Rabi_crop1_net_income}',Rabi_crop2_name='${Rabi_crop2_name}',Rabi_crop2_area='${Rabi_crop2_area}',Rabi_crop2_cost='${Rabi_crop2_cost}',Rabi_crop2_production='${Rabi_crop2_production}',Rabi_crop2_income='${Rabi_crop2_income}',Rabi_crop2_net_income='${Rabi_crop2_net_income}',Rabi_crop3_name='${Rabi_crop3_name}',Rabi_crop3_area='${Rabi_crop3_area}',Rabi_crop3_cost='${Rabi_crop3_cost}',Rabi_crop3_production='${Rabi_crop3_production}',Rabi_crop3_income='${Rabi_crop3_income}',Rabi_crop3_net_income='${Rabi_crop3_net_income}',Rabi_crop4_name='${Rabi_crop4_name}',Rabi_crop4_area='${Rabi_crop4_area}',Rabi_crop4_cost='${Rabi_crop4_cost}',Rabi_crop4_production='${Rabi_crop4_production}',Rabi_crop4_income='${Rabi_crop4_income}',Rabi_crop4_net_income='${Rabi_crop4_net_income}',Summer_crop1_name='${Summer_crop1_name}',Summer_crop1_area='${Summer_crop1_area}',Summer_crop1_cost='${Summer_crop1_cost}',Summer_crop1_production='${Summer_crop1_production}',Summer_crop1_income='${Summer_crop1_income}',Summer_crop1_net_income='${Summer_crop1_net_income}',Summer_crop2_name='${Summer_crop2_name}',Summer_crop2_area='${Summer_crop2_area}',Summer_crop2_cost='${Summer_crop2_cost}',Summer_crop2_production='${Summer_crop2_production}',Summer_crop2_income='${Summer_crop2_income}',Summer_crop2_net_income='${Summer_crop2_net_income}',Summer_crop3_name='${Summer_crop3_name}',Summer_crop3_area='${Summer_crop3_area}',Summer_crop3_cost='${Summer_crop3_cost}',Summer_crop3_production='${Summer_crop3_production}',Summer_crop3_income='${Summer_crop3_income}',Summer_crop3_net_income='${Summer_crop3_net_income}',Summer_crop4_name='${Summer_crop4_name}',Summer_crop4_area='${Summer_crop4_area}',Summer_crop4_cost='${Summer_crop4_cost}',Summer_crop4_production='${Summer_crop4_production}',Summer_crop4_income='${Summer_crop4_income}',Summer_crop4_net_income='${Summer_crop4_net_income}',total_crop_gross_income='${total_crop_gross_income}',total_crop_net_income= '${total_crop_net_income}' WHERE id = ${id}` ;
            // let query = db.query(sql, (err, result) => {
            //         if(err) {
            //             res.json(err.sqlMessage)
            //         }
            //         let id = result.insertId;
                    
            //         res.json({
            //             msg:"Midline Crop Updated successfully",
            //             id
            //         })
    
            //     });

        }

    });


})

router.post('/livestock',async (req,res)=>{

    const {farmer_id,livestock1_name,livestock1_no,livestock1_cost,livestock1_income,livestock2_name,livestock2_no,livestock2_cost,livestock2_income,livestock3_name,livestock3_no,livestock3_cost,livestock3_income,livestock4_name,livestock4_no,livestock4_cost,livestock4_income} =req.body;
    
    var year = new Date().getFullYear();

    let sql = `SELECT * FROM midline_livehood_income WHERE farmer_id=${farmer_id} AND year=${year}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        
        if(result.length==0){
            
        
            var {farmer_id,livestock1_name,livestock1_no,livestock1_cost,livestock1_income,livestock2_name,livestock2_no,livestock2_cost,livestock2_income,livestock3_name,livestock3_no,livestock3_cost,livestock3_income,livestock4_name,livestock4_no,livestock4_cost,livestock4_income} =req.body;

            var livestock1_net_income= Number(livestock1_income) -Number(livestock1_cost);
            var livestock2_net_income= Number(livestock2_income) -Number(livestock2_cost);
            var livestock3_net_income= Number(livestock3_income) -livestock3_cost;
            var livestock4_net_income= Number(livestock4_income) -livestock4_cost;

            var total_gross_income = Number(livestock1_income)+Number(livestock2_income)+Number(livestock3_income)+Number(livestock4_income);
            var total_net_income = Number(livestock1_net_income)+Number(livestock2_net_income)+Number(livestock3_net_income)+Number(livestock4_net_income);

            let post = {farmer_id,livestock1_name,livestock1_no,livestock1_cost,livestock1_income,livestock1_net_income,livestock2_name,livestock2_no,livestock2_cost,livestock2_income,livestock2_net_income,livestock3_name,livestock3_no,livestock3_cost,livestock3_income,livestock3_net_income,livestock4_name,livestock4_no,livestock4_cost,livestock4_income,livestock4_net_income,total_gross_income,total_net_income,year};

    
        let sql = 'INSERT INTO midline_livehood_income SET ?';   
        let query = db.query(sql, post, (err, result) => {
                if(err) {
                    res.json(err.sqlMessage)
                }
                let id = result.insertId;
                
                res.json({
                    msg:"Midline Livestock saved successfully",
                    id
                })

            });

                
        }else{
            res.json({
                msg:"Data already exists"
            })

            //     const {farmer_id,livestock1_name,livestock1_no,livestock1_cost,livestock1_income,livestock2_name,livestock2_no,livestock2_cost,livestock2_income,livestock3_name,livestock3_no,livestock3_cost,livestock3_income,livestock4_name,livestock4_no,livestock4_cost,livestock4_income} =req.body;

            //     var livestock1_net_income= Number(livestock1_income) -Number(livestock1_cost);
            //     var livestock2_net_income= Number(livestock2_income) -Number(livestock2_cost);
            //     var livestock3_net_income= Number(livestock3_income) -livestock3_cost;
            //     var livestock4_net_income= Number(livestock4_income) -livestock4_cost;

            //     var total_gross_income = Number(livestock1_income)+Number(livestock2_income)+Number(livestock3_income)+Number(livestock4_income);
            //     var total_net_income = Number(livestock1_net_income)+Number(livestock2_net_income)+Number(livestock3_net_income)+Number(livestock4_net_income);
        
             
            //     let id  =result[0].id ;

            // let sql = `UPDATE midline_livehood_income SET  livestock1_name='${livestock1_name}',livestock1_no ='${livestock1_no}',livestock1_cost ='${livestock1_cost}',livestock1_income ='${livestock1_income}',livestock1_net_income ='${livestock1_net_income}',livestock2_name='${livestock2_name}',livestock2_no ='${livestock2_no}',livestock2_cost ='${livestock2_cost}',livestock2_income ='${livestock2_income}',livestock2_net_income ='${livestock2_net_income}',livestock3_name='${livestock3_name}',livestock3_no ='${livestock3_no}',livestock3_cost ='${livestock3_cost}',livestock3_income ='${livestock3_income}',livestock3_net_income ='${livestock3_net_income}',livestock4_name='${livestock4_name}',livestock4_no ='${livestock4_no}',livestock4_cost ='${livestock4_cost}',livestock4_income ='${livestock4_income}',livestock4_net_income ='${livestock4_net_income}',total_gross_income ='${total_gross_income}',total_net_income ='${total_net_income}' WHERE id = ${id}` ;
            // let query = db.query(sql, (err, result) => {
            //         if(err) {
            //             res.json(err.sqlMessage)
            //         }
            //         let id = result.insertId;
                    
            //         res.json({
            //             msg:"Midline Livestock Updated successfully",
            //             id
            //         })
    
            //     });

        }

    });
})


router.post('/farm', async (req,res)=>{
    const {id,farmer_id,farm_labour_no_of_men_days,farm_labour_income,farm_labour_expenditure}= req.body;

    var year = new Date().getFullYear();

    let sql = `SELECT * FROM mid_farm_income WHERE farmer_id=${farmer_id} AND year=${year}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        
        if(result.length==0){
            
            const {id,farmer_id,farm_labour_no_of_men_days,farm_labour_income,farm_labour_expenditure}= req.body

            let sql = `SELECT total_crop_gross_income,mid_total_crop_net_income FROM midline_crop_income WHERE farmer_id=${farmer_id} AND year=${year}`;  
        
            let crop_gross;
            let crop_total;
        
            db.query(sql, function(err, rows){
                if(err) {
                  throw err;
                } else {
                  setValue(rows[0].total_crop_gross_income,rows[0].mid_total_crop_net_income);
                }
              });
        
            function setValue(value,value2) {
                        crop_gross = value;
                        crop_total = value2;
        
                        const {farmer_id} =req.body
        
                        let sql = `SELECT total_gross_income,total_net_income FROM midline_livehood_income WHERE farmer_id=${farmer_id} AND year=${year}`;  
        
                        let livehood_gross;
                        let livehood_total;
                        
        
                        db.query(sql, function(err, rows){
                            if(err) {
                            throw err;
                            } else {
                            setValue(rows[0].total_gross_income,rows[0].total_net_income);
                            }
                        });
                        
                        function setValue(value,value2) {
                            livehood_gross = value;
                            livehood_total = value2;
                            
                            let crop_live_gross = Number(crop_gross)+Number(livehood_gross);
                            let crop_live_total =Number(crop_total)+Number(livehood_total);
        
                            const farm_labour_net_income = Number(farm_labour_income-farm_labour_expenditure);
        
                            let farm_gross_income =Number( crop_live_gross)+Number(farm_labour_income);
                            let mid_farm_net_income = Number(crop_live_total)+Number(farm_labour_net_income);
        
                           
        
        
                            let post ={id,farmer_id,farm_labour_no_of_men_days,farm_labour_income,farm_labour_expenditure,farm_labour_net_income,farm_gross_income,mid_farm_net_income,year }
        
                            let sql = 'INSERT INTO mid_farm_income SET ?';   
                            let query = db.query(sql, post, (err, result) => {
                                if(err) {
                                    res.json(err.sqlMessage)
                                }
                                let id = result.insertId;
                                
                                res.json({
                                    msg:"Midline Farm income saved successfully",
                                    id
                                })
                        
                            });
        
                            
        
                        }
          
              }
            


                
        }else{
            
            // const {farmer_id,farm_labour_no_of_men_days,farm_labour_income,farm_labour_expenditure}= req.body;

            // let sql = `SELECT total_crop_gross_income,mid_total_crop_net_income FROM midline_crop_income WHERE farmer_id=${farmer_id}`;  
            // let id  =result[0].id ;

            // let crop_gross;
            // let crop_total;
        
            // db.query(sql, function(err, rows){
            //     if(err) {
            //       throw err;
            //     } else {
            //       setValue(rows[0].total_crop_gross_income,rows[0].total_crop_net_income);
            //     }
            //   });
        
            // function setValue(value,value2) {
            //             crop_gross = value;
            //             crop_total = value2;
        
            //             const {farmer_id} =req.body
        
            //             let sql = `SELECT total_gross_income,total_net_income FROM midline_livehood_income WHERE farmer_id=${farmer_id}`;  
        
            //             let livehood_gross;
            //             let livehood_total;
                        
        
            //             db.query(sql, function(err, rows){
            //                 if(err) {
            //                 throw err;
            //                 } else {
            //                 setValue(rows[0].total_gross_income,rows[0].total_net_income);
            //                 }
            //             });
                        
            //             function setValue(value,value2) {
            //                 const {farmer_id,farm_labour_no_of_men_days,farm_labour_income,farm_labour_expenditure}= req.body
            //                 livehood_gross = value;
            //                 livehood_total = value2;
                            
            //                 let crop_live_gross = Number(crop_gross)+Number(livehood_gross);
            //                 let crop_live_total =Number(crop_total)+Number(livehood_total);
        
            //                 const farm_labour_net_income = Number(farm_labour_income-farm_labour_expenditure);
        
            //                 let farm_gross_income =Number( crop_live_gross)+Number(farm_labour_income);
            //                 let farm_net_income = Number(crop_live_total)+Number(farm_labour_net_income);
        
                           
        
        
            //                 let post ={farmer_id,farm_labour_no_of_men_days,farm_labour_income,farm_labour_expenditure,farm_labour_net_income,farm_gross_income,farm_net_income }
        
            //                 let sql = `UPDATE mid_farm_income SET farm_labour_no_of_men_days='${farm_labour_no_of_men_days}',farm_labour_income='${farm_labour_income}',farm_labour_expenditure='${farm_labour_expenditure}',farm_labour_net_income='${farm_labour_net_income}',farm_gross_income='${farm_gross_income}',farm_net_income='${farm_net_income}' WHERE id = ${id}`;   
            //                 let query = db.query(sql, post, (err, result) => {
            //                     if(err) {
            //                         res.json(err.sqlMessage)
            //                     }
            //                     let id = result.insertId;
                                
            //                     res.json({
            //                         msg:"Midline Farm income Updated successfully",
            //                         id
            //                     })
                        
            //                 });
        
                            
        
            //             }
          
            //   }

            res.json({
                msg:"Data already exists"
            })
         

        }

    });

})


router.post('/non_farm',async (req,res)=>{

    const {farmer_id,wage_labour_no_of_men_days,wage_labour_income,wage_labour_expenditure,business_income,business_expenditure,job_net_income} = req.body;


    var year = new Date().getFullYear();

    let sql = `SELECT * FROM mid_non_farm_income WHERE farmer_id=${farmer_id} AND year=${year} `;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        
        if(result.length==0){
            
        
            const wage_labour_net_income = Number(wage_labour_income)-Number(wage_labour_expenditure);
            const business_net_income=Number(business_income)-Number(business_expenditure);
            const b_j_net_income = Number(business_net_income)+Number(job_net_income);

            var gross_non_farm_income = Number(wage_labour_income)+Number(business_income+business_net_income);
            var mid_net_non_farm_income = Number(wage_labour_net_income)+Number(b_j_net_income);

            let post = {farmer_id,wage_labour_no_of_men_days,wage_labour_income,wage_labour_expenditure,wage_labour_net_income,business_income,business_expenditure,business_net_income,job_net_income,b_j_net_income,gross_non_farm_income,mid_net_non_farm_income,year}

            let sql = 'INSERT INTO mid_non_farm_income SET  ?';
            let query = db.query(sql, post, (err, result) => {
                if(err) {
                    res.json(err.sqlMessage)
                }
                let id = result.insertId;
                
                res.json({
                    msg:"Midline Non Farm income saved successfully",
                    id
                })

            });

                
        }else{

            res.json({
                msg:"data already exists"
            })
            //     let id  =result[0].id ;
            //     const wage_labour_net_income = wage_labour_income-wage_labour_expenditure;
            //     const business_net_income=business_income-business_expenditure;
            //    const b_j_net_income = Number(business_net_income)+Number(job_net_income);

            // var gross_non_farm_income = wage_labour_income+business_income+business_net_income;
            // var net_non_farm_income = Number(wage_labour_net_income)+Number(b_j_net_income);

            //     let post = {farmer_id,wage_labour_no_of_men_days,wage_labour_income,wage_labour_expenditure,wage_labour_net_income,business_income,business_expenditure,business_net_income,job_net_income,b_j_net_income,gross_non_farm_income,net_non_farm_income}

            //     let sql = `UPDATE mid_non_farm_income SET wage_labour_no_of_men_days='${wage_labour_no_of_men_days}',wage_labour_income='${wage_labour_income}',wage_labour_expenditure='${wage_labour_expenditure}',wage_labour_net_income='${wage_labour_net_income}',business_income='${business_income}',business_expenditure='${business_expenditure}',business_net_income='${business_net_income}',job_net_income='${job_net_income}',b_j_net_income='${b_j_net_income}',gross_non_farm_income='${gross_non_farm_income}',net_non_farm_income='${net_non_farm_income}' WHERE id = ${id}`;
            //     let query = db.query(sql, post, (err, result) => {
            //         if(err) {
            //             res.json(err.sqlMessage)
            //         }
            //         let id = result.insertId;
                    
            //         res.json({
            //             msg:"Midline Non Farm income Updated successfully",
            //             id
            //         })

            //     });

        }

    });
})




// /////////////////////////////////////////////////////////////////////////
router.post('/fishery',async (req,res)=>{

    var year = new Date().getFullYear();

    var {farmer_id,pond_size,liming,fertilizer,variety_1,variety_2,variety_3,variety_4,variety_5,variety1_amount,variety2_amount,variety3_amount,variety4_amount,variety5_amount,variety1_cost,variety2_cost,variety3_cost,variety4_cost,variety5_cost,fertilizer_cost,feed_cost,ph_water,intermediary_cost,total_cost,income_variety_1,variety1_sold_qty,variety1_sold_amount,income_variety_2,variety2_sold_qty,variety2_sold_amount,income_variety_3,variety3_sold_qty,variety3_sold_amount,income_variety_4,variety4_sold_qty,variety4_sold_amount,income_variety_5,variety5_sold_qty,variety5_sold_amount,} = req.body;

    let sql = `SELECT * FROM mid_fishery WHERE farmer_id=${farmer_id} AND year =${year}`; 

    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        // console.log(result)
        
        if(result.length==0){
            
 
            var {farmer_id,pond_size,liming,fertilizer,variety_1,variety_2,variety_3,variety_4,variety_5,variety1_amount,variety2_amount,variety3_amount,variety4_amount,variety5_amount,variety1_cost,variety2_cost,variety3_cost,variety4_cost,variety5_cost,fertilizer_cost,feed_cost,ph_water,intermediary_cost,total_cost,income_variety_1,variety1_sold_qty,variety1_sold_amount,income_variety_2,variety2_sold_qty,variety2_sold_amount,income_variety_3,variety3_sold_qty,variety3_sold_amount,income_variety_4,variety4_sold_amount,income_variety_5,variety5_sold_qty,variety5_sold_amount} = req.body;
    
            var fingerlig = Number(variety1_cost)+Number(variety2_cost)+Number(variety3_cost)+Number(variety4_cost)+Number(variety5_cost);
            var total_cost = Number(fingerlig)+Number(fertilizer_cost)+Number(feed_cost)+Number(intermediary_cost);
            var income = Number(variety1_sold_amount)+Number(variety2_sold_amount)+Number(variety3_sold_amount)+Number(variety4_sold_amount)+Number(variety5_sold_amount)
            var mid_net_income = Number(income)-Number(total_cost);
     
            let post = {farmer_id,pond_size,liming,fertilizer,variety_1,variety_2,variety_3,variety_4,variety_5,variety1_amount,variety2_amount,variety3_amount,variety4_amount,variety5_amount,variety1_cost,variety2_cost,variety3_cost,variety4_cost,variety5_cost,fertilizer_cost,feed_cost,ph_water,intermediary_cost,total_cost,income_variety_1,variety1_sold_qty,variety1_sold_amount,income_variety_2,variety2_sold_qty,variety2_sold_amount,income_variety_3,variety3_sold_qty,variety3_sold_amount,income_variety_4,variety4_sold_amount,income_variety_5,variety5_sold_qty,variety5_sold_amount,income,mid_net_income,year}

            let sql = 'INSERT INTO mid_fishery SET ?';
            let query = db.query(sql, post, (err, result) => {
                if(err) {
                    res.json(err.sqlMessage)
                    console.log(err)
                }
                let id = result.insertId;

                console.log(result)
                
                res.json({
                    msg:"Midline Fishery saved successfully",
                    id
                })

            });
                
        }else{

            res.json({
                msg:"Data exists already",
                
            })

            //     let id  =result[0].id ;
            //     var {farmer_id,pond_size,liming,fertilizer,variety_1,variety_2,variety_3,variety_4,variety_5,variety1_amount,variety2_amount,variety3_amount,variety4_amount,variety5_amount,variety1_cost,variety2_cost,variety3_cost,variety4_cost,variety5_cost,fertilizer_cost,feed_cost,ph_water,intermediary_cost,total_cost,income_variety_1,variety1_sold_qty,variety1_sold_amount,income_variety_2,variety2_sold_qty,variety2_sold_amount,income_variety_3,variety3_sold_qty,variety3_sold_amount,income_variety_4,variety4_sold_qty,variety4_sold_amount,income_variety_5,variety5_sold_qty,variety5_sold_amount,} = req.body;
            //     var fingerlig = Number(variety1_cost)+Number(variety2_cost)+Number(variety3_cost)+Number(variety4_cost)+Number(variety5_cost);
            //     var total_cost = Number(fingerlig)+Number(fertilizer_cost)+Number(feed_cost)+Number(intermediary_cost);
            //     var income = Number(variety1_sold_amount)+Number(variety2_sold_amount)+Number(variety3_sold_amount)+Number(variety4_sold_amount)+Number(variety5_sold_amount)
            //     var net_income = Number(income)-Number(total_cost);

            // let sql = `UPDATE mid_fishery SET pond_size='${pond_size}',liming ='${liming}',fertilizer='${fertilizer}',variety_1='${variety_1}',variety_2='${variety_2}',variety_3='${variety_3}',variety_4='${variety_4}',variety_5='${variety_5}',variety1_amount='${variety1_amount}',variety2_amount='${variety2_amount}',variety3_amount='${variety3_amount}',variety4_amount='${variety4_amount}',variety5_amount='${variety5_amount}',
            //             variety1_cost='${variety1_cost}',variety2_cost='${variety2_cost}',variety3_cost='${variety3_cost}',variety4_cost='${variety4_cost}',variety5_cost='${variety5_cost}',fertilizer_cost='${fertilizer_cost}',feed_cost='${feed_cost}', ph_water='${ph_water}',total_cost='${total_cost}',intermediary_cost='${intermediary_cost}',
            //             income_variety_1='${income_variety_1}',variety1_sold_qty='${variety1_sold_qty}',variety1_sold_amount='${variety1_sold_amount}',income_variety_2='${income_variety_2}',variety2_sold_qty='${variety2_sold_qty}',variety2_sold_amount='${variety2_sold_amount}',income_variety_3='${income_variety_3}',variety3_sold_qty='${variety3_sold_qty}',variety3_sold_amount='${variety3_sold_amount}',
            //             income_variety_4='${income_variety_4}',variety4_sold_qty='${variety4_sold_qty}',variety4_sold_amount='${variety4_sold_amount}',
            //             income_variety_5='${income_variety_5}',variety5_sold_qty='${variety5_sold_qty}',variety5_sold_amount='${variety5_sold_amount}',
            //             income='${income}',net_income='${net_income}' WHERE id = ${id}`;

            // let query = db.query(sql, (err, result) => {
            //     if(err) {
            //         console.log(err)
            //         res.json(err.sqlMessage)
            //     }
            //     res.json({
            //         msg:"Midline Fishery Updated successfully",
            //         id
            //     })

            // });

        }

    });
})


module.exports = router;