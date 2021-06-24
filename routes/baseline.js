const express = require('express');
const bodyparser = require ("body-parser");
const app = express();
const router = express.Router();
const auth = require('../middleware/auth');
var db = require('../db');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


router.post('/',(req,res)=>{
    const {block_id,gp_id,user_id,village_name,SHG_name,farmer_name,housing,drinking_water,toilet,male,female,literate_member,college_going_member,literacy,
        farm_land,barren_land,pond_land,image} = req.body;
    
    var total_land=Number(farm_land)+Number(barren_land)+Number(pond_land);
    var category = '';
    if(total_land==1){
        category = 'A';
    }else if(total_land >1 && total_land<=5){
        category = 'B';
    } else{
        category = 'C';
    }


    let post ={block_id,gp_id,village_id:village_name,shg_id:SHG_name,user_id,farmer_name,male,female,house:housing,drinking_water,toilet,school_going_children:college_going_member,literate_member,higgest_study:literacy,
        farm_land,barren_land,pond:pond_land,total_land,total_land,image_url:image}

    let sql = 'INSERT INTO baseline SET ?';   
    let query = db.query(sql, post, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        let id = result.insertId;
        
        res.json({
            msg:"Baseline saved successfully",
            id
        })

    });
})



// router.post('/',(req,res)=>{ 

  
//     const {block_id,gp_id,user_id,village_name,SHG_name,farmer_name,housing,drinking_water,toilet,male,female,literate_member,college_going_member,literacy,
//         farm_land,barren_land,pond_land,image,voter_id} = req.body;
    
    
//     let sql = `SELECT * FROM baseline WHERE shg_id='${SHG_name}' AND farmer_name='${farmer_name}'`;   
//     let query = db.query(sql, post, (err, result) => {
//         if(err) {
//             res.json(err.sqlMessage)
//         }

//         if(result.length>0){
            
//             var total_land=farm_land+barren_land+pond_land;


//             let post ={village_id:village_name,shg_id:SHG_name,user_id,farmer_name,male,female,house:housing,drinking_water,toilet,school_going_children:college_going_member,literate_member,higgest_study:literacy,
//         farm_land,barren_land,pond:pond_land,total_land,image_url:image}


//             let sql = 'INSERT INTO baseline SET ?';   
//             let query = db.query(sql, post, (err, result) => {
//                 if(err) {
//                     res.json(err.sqlMessage)
//                 }
//                 let id = result.insertId;
                
//                 res.json({
//                     msg:"Baseline saved successfully",
//                     id
//                 })
        
//             });
           
//         }else{
//             res.json({
//                 msg:"User exists already"  
//             })
//         }

//     });




   
// })

router.post('/intervention',(req,res)=>{
    const {farmer_id,poultry__cost,poultry_farmer_cost,duckery_cost,duckery_farmer_cost,paddy_cost,paddy_farmer_cost
    ,farm_pond_cost,farm_pond_farmer_cost,horticulture_cost,horticulture_farmer_contribution,piggery_cost,piggery_farmer_contribution,goatery_cost,goatery_farmer_contribution,
    veg_cost,veg_farmer_contribution,vermicompost_cost,vermicompost_farmer_cost,other_cost,other_farm_cost} = req.body;
    
    let poultry_total_cost=Number(poultry__cost)+Number(poultry_farmer_cost);
    let duckery_total_cost = Number(duckery_cost)+Number(duckery_farmer_cost);
    let paddy_total_cost= Number(paddy_cost)+Number(paddy_farmer_cost);
    let farm_pond_total_cost =Number(farm_pond_cost)+Number(farm_pond_farmer_cost);
    let horticulture_total_cost = Number(horticulture_cost)+Number(horticulture_farmer_contribution);
    let piggery_total_cost = Number(piggery_cost)+Number(piggery_farmer_contribution);
    let goatery_total_cost = Number(goatery_cost)+Number(goatery_farmer_contribution);
    let veg_total_cost = Number(veg_cost)+Number(veg_farmer_contribution);
    let vermicompost_total_cost = Number(vermicompost_cost)+Number(vermicompost_farmer_cost);
    let other_total_cost = Number(other_cost)+Number(other_farm_cost);


    let sql = `SELECT * FROM intervention WHERE farmer_id=${farmer_id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        
        if(result.length==0){
            
        let post =  {farmer_id,poultry__cost,poultry_farmer_cost,poultry_total_cost,duckery_cost,duckery_farmer_cost,duckery_total_cost,paddy_cost,paddy_farmer_cost,paddy_total_cost
                    ,farm_pond_cost,farm_pond_farmer_cost,farm_pond_total_cost,horticulture_cost,horticulture_farmer_contribution,horticulture_total_cost,piggery_cost,piggery_farmer_contribution,piggery_total_cost,goatery_cost,goatery_farmer_contribution,goatery_total_cost,
                     veg_cost,veg_farmer_contribution,veg_total_cost,vermicompost_cost,vermicompost_farmer_cost,vermicompost_total_cost,other_cost,other_farm_cost,other_total_cost}

        let sql = 'INSERT INTO intervention SET ?';   
        let query = db.query(sql, post, (err, result) => {
                if(err) {
                    res.json(err.sqlMessage)
                }
                let id = result.insertId;
                
                res.json({
                    msg:"Intervention saved successfully",
                    id
                })

            });

                
        }else{

            let {farmer_id,poultry__cost,poultry_farmer_cost,duckery_cost,duckery_farmer_cost,paddy_cost,paddy_farmer_cost
                ,farm_pond_cost,farm_pond_farmer_cost,horticulture_cost,horticulture_farmer_contribution,piggery_cost,piggery_farmer_contribution,goatery_cost,goatery_farmer_contribution,
                veg_cost,veg_farmer_contribution,vermicompost_cost,vermicompost_farmer_cost,other_cost,other_farm_cost} = req.body;
                
                let poultry_total_cost=poultry__cost+poultry_farmer_cost;
                let duckery_total_cost = duckery_cost+duckery_farmer_cost;
                let paddy_total_cost= paddy_cost+paddy_farmer_cost;
                let farm_pond_total_cost =farm_pond_cost+farm_pond_farmer_cost;
                let horticulture_total_cost = horticulture_cost+horticulture_farmer_contribution;
                let piggery_total_cost = piggery_cost+piggery_farmer_contribution;
                let goatery_total_cost = goatery_cost+goatery_farmer_contribution;
                let veg_total_cost = veg_cost+veg_farmer_contribution;
                let vermicompost_total_cost = vermicompost_cost+vermicompost_farmer_cost;
                let other_total_cost = other_cost+other_farm_cost;

            let id  =result[0].id ;

            
            
            let sql = `UPDATE intervention SET poultry__cost='${poultry__cost}', poultry_farmer_cost='${poultry_farmer_cost}', poultry_total_cost='${poultry_total_cost}', duckery_cost='${duckery_cost}',duckery_farmer_cost='${duckery_farmer_cost}', duckery_total_cost='${duckery_total_cost}',paddy_cost='${paddy_cost}',paddy_farmer_cost='${paddy_farmer_cost}',paddy_total_cost='${paddy_total_cost}',farm_pond_cost='${farm_pond_cost}',farm_pond_farmer_cost='${farm_pond_farmer_cost}',farm_pond_total_cost='${farm_pond_total_cost}',horticulture_cost='${horticulture_cost}',horticulture_farmer_contribution='${horticulture_farmer_contribution}',horticulture_total_cost='${horticulture_total_cost}',piggery_cost='${piggery_cost}',piggery_farmer_contribution='${piggery_farmer_contribution}',piggery_total_cost='${piggery_total_cost}',goatery_cost='${goatery_cost}',goatery_farmer_contribution='${goatery_farmer_contribution}',goatery_total_cost='${goatery_total_cost}',veg_cost='${veg_cost}',veg_farmer_contribution='${veg_farmer_contribution}',veg_total_cost='${veg_total_cost}',vermicompost_cost='${vermicompost_cost}',vermicompost_farmer_cost='${vermicompost_farmer_cost}',vermicompost_total_cost='${vermicompost_total_cost}',other_cost='${other_cost}',other_farm_cost='${other_farm_cost}',other_total_cost='${other_total_cost}' WHERE id = ${id}` ;
            let query = db.query(sql, (err, result) => {
                    if(err) {
                        res.json(err.sqlMessage)
                    }
                    let id = result.insertId;
                    
                    res.json({
                        msg:"Intervention Updated successfully",
                        id
                    })
    
                });

        }

    });


    
})


router.post('/crop',(req,res)=>{

    const { farmer_id,kharif_crop1_name,kharif_crop1_area,kharif_crop1_cost,kharif_crop1_production,kharif_crop1_income,kharif_crop2_name,kharif_crop2_area,kharif_crop2_cost,kharif_crop2_production,kharif_crop2_income,kharif_crop3_name,kharif_crop3_area,kharif_crop3_cost,kharif_crop3_production,kharif_crop3_income,kharif_crop4_name,kharif_crop4_area,kharif_crop4_cost,kharif_crop4_production,kharif_crop4_income,Rabi_crop1_name,Rabi_crop1_area,Rabi_crop1_cost,Rabi_crop1_production,Rabi_crop1_income,Rabi_crop2_name,Rabi_crop2_area,Rabi_crop2_cost,Rabi_crop2_production,Rabi_crop2_income,Rabi_crop3_name,Rabi_crop3_area,Rabi_crop3_cost,Rabi_crop3_production,Rabi_crop3_income,Rabi_crop4_name,Rabi_crop4_area,Rabi_crop4_cost,Rabi_crop4_production,Rabi_crop4_income,Summer_crop1_name,Summer_crop1_area,Summer_crop1_cost,Summer_crop1_production,Summer_crop1_income,Summer_crop2_name,Summer_crop2_area,Summer_crop2_cost,Summer_crop2_production,Summer_crop2_income,Summer_crop3_name,Summer_crop3_area,Summer_crop3_cost,Summer_crop3_production,Summer_crop3_income,Summer_crop4_name,Summer_crop4_area,Summer_crop4_cost,Summer_crop4_production,Summer_crop4_income } = req.body;
    
        var kharif_crop1_net_income = Number(kharif_crop1_income) - Number(kharif_crop1_cost);
        var kharif_crop2_net_income = Number(kharif_crop2_income) - Number(kharif_crop2_cost);
        var kharif_crop3_net_income = Number(kharif_crop3_income) - Number(kharif_crop3_cost);
        var kharif_crop4_net_income = Number(kharif_crop4_income) - Number(kharif_crop4_cost);
        var Rabi_crop1_net_income   = Number(Rabi_crop1_income) - Number(Rabi_crop1_cost);
        var Rabi_crop2_net_income   = Number(Rabi_crop2_income) - Number(Rabi_crop2_cost);
        var Rabi_crop3_net_income   = Number(Rabi_crop3_income) - Number(Rabi_crop3_cost);
        var Rabi_crop4_net_income   = Number(Rabi_crop4_income) - Number(Rabi_crop4_cost);
        var Summer_crop1_net_income = Number(Summer_crop1_income) - Number(Summer_crop1_cost);
        var Summer_crop2_net_income = Number(Summer_crop2_income) - Number(Summer_crop2_cost);
        var Summer_crop3_net_income = Number(Summer_crop3_income) - Number(Summer_crop3_cost);
        var Summer_crop4_net_income = Number(Summer_crop4_income) - Number(Summer_crop4_cost);


        let sql = `SELECT * FROM baseline_crop_income WHERE farmer_id=${farmer_id}`;   
        let query = db.query(sql, (err, result) => {
            if(err) {
                res.json(err.sqlMessage)
            }
            
            if(result.length==0){

                
                    var total_crop_gross_income = Number(kharif_crop1_income)+Number(kharif_crop2_income)+Number(kharif_crop3_income)+Number(kharif_crop4_income)+Number(Rabi_crop1_income)+Number(Rabi_crop2_income)+Number(Rabi_crop3_income)+Number(Rabi_crop4_income)+Number(Summer_crop1_income)+Number(Summer_crop2_income)+Number(Summer_crop3_income)+Number(Summer_crop4_income);
                                
                                var total_crop_net_income = Number(kharif_crop1_net_income)+Number(kharif_crop2_net_income)+Number(kharif_crop3_net_income)+Number(kharif_crop4_net_income)+Number(Rabi_crop1_net_income)+Number(Rabi_crop2_net_income)+Number(Rabi_crop3_net_income)+Number(Rabi_crop4_net_income)+Number(Summer_crop1_net_income)+Number(Summer_crop2_net_income)+Number(Summer_crop3_net_income)+Number(Summer_crop4_net_income);


                        let post = {farmer_id,kharif_crop1_name,kharif_crop1_area,kharif_crop1_cost,kharif_crop1_production,kharif_crop1_income,kharif_crop1_net_income,kharif_crop2_name,kharif_crop2_area,kharif_crop2_cost,kharif_crop2_production,kharif_crop2_income,kharif_crop2_net_income,kharif_crop3_name,kharif_crop3_area,kharif_crop3_cost,kharif_crop3_production,kharif_crop3_income,kharif_crop3_net_income,kharif_crop4_name,kharif_crop4_area,kharif_crop4_cost,kharif_crop4_production,kharif_crop4_income,kharif_crop4_net_income,Rabi_crop1_name,Rabi_crop1_area,Rabi_crop1_cost,Rabi_crop1_production,Rabi_crop1_income,Rabi_crop1_net_income,Rabi_crop2_name,Rabi_crop2_area,Rabi_crop2_cost,Rabi_crop2_production,Rabi_crop2_income,Rabi_crop2_net_income,Rabi_crop3_name,Rabi_crop3_area,Rabi_crop3_cost,Rabi_crop3_production,Rabi_crop3_income,Rabi_crop3_net_income,Rabi_crop4_name,Rabi_crop4_area,Rabi_crop4_cost,Rabi_crop4_production,Rabi_crop4_income,Rabi_crop4_net_income,Summer_crop1_name,Summer_crop1_area,Summer_crop1_cost,Summer_crop1_production,Summer_crop1_income,Summer_crop1_net_income,Summer_crop2_name,Summer_crop2_area,Summer_crop2_cost,Summer_crop2_production,Summer_crop2_income,Summer_crop2_net_income,Summer_crop3_name,Summer_crop3_area,Summer_crop3_cost,Summer_crop3_production,Summer_crop3_income,Summer_crop3_net_income,Summer_crop4_name,Summer_crop4_area,Summer_crop4_cost,Summer_crop4_production,Summer_crop4_income,Summer_crop4_net_income,total_crop_gross_income,total_crop_net_income}

                        let sql = 'INSERT INTO baseline_crop_income SET ?';   
                        let query = db.query(sql, post, (err, result) => {
                        if(err) {
                            res.json(err.sqlMessage)
                        }
                        let id = result.insertId;

                        res.json({
                            msg:"Baseline Crop saved successfully",
                            id
                        })

            });


            }else{
                res.json({
                    msg:"Data exists already"
                    
                })

            }
        })


})


router.post('/livestock',(req,res)=>{

    const {farmer_id,livestock1_name,livestock1_no,livestock1_cost,livestock1_income,livestock2_name,livestock2_no,livestock2_cost,livestock2_income,livestock3_name,livestock3_no,livestock3_cost,livestock3_income,livestock4_name,livestock4_no,livestock4_cost,livestock4_income} =req.body;


    let sql = `SELECT * FROM baseline_livehood_income WHERE farmer_id=${farmer_id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
        
        if(result.length==0){
            
            var livestock1_net_income= Number(livestock1_income) -Number(livestock1_cost);
            var livestock2_net_income= Number(livestock2_income) -Number(livestock2_cost);
            var livestock3_net_income= Number(livestock3_income) -Number(livestock3_cost);
            var livestock4_net_income= Number(livestock4_income) -Number(livestock4_cost);

            var total_gross_income = Number(livestock1_income)+Number(livestock2_income)+Number(livestock3_income)+Number(livestock4_income);
            var total_net_income = Number(livestock1_net_income)+Number(livestock2_net_income)+Number(livestock3_net_income)+Number(livestock4_net_income);

             let post = {farmer_id,livestock1_name,livestock1_no,livestock1_cost,livestock1_income,livestock1_net_income,livestock2_name,livestock2_no,livestock2_cost,livestock2_income,livestock2_net_income,livestock3_name,livestock3_no,livestock3_cost,livestock3_income,livestock3_net_income,livestock4_name,livestock4_no,livestock4_cost,livestock4_income,livestock4_net_income,total_gross_income,total_net_income};

            let sql = 'INSERT INTO baseline_livehood_income SET ?';   
            let query = db.query(sql, post, (err, result) => {
                if(err) {
                    res.json(err.sqlMessage)
                }
                let id = result.insertId;
                
                res.json({
                    msg:"Baseline Livestock income saved successfully",
                    id
                })

            });
        }else{
            res.json({
                msg:"Data already exist",
                
            })

        }
    })




})

router.post('/farm', (req,res)=>{

    const {id,farmer_id,farm_labour_no_of_men_days,farm_labour_income,farm_labour_expenditure}= req.body

    let sql = `SELECT total_crop_gross_income,total_crop_net_income FROM baseline_crop_income WHERE farmer_id=${farmer_id}`;  

    let crop_gross;
    let crop_total;

    db.query(sql, function(err, rows){
        if(err) {
          throw err;
        } else {
          setValue(rows[0].total_crop_gross_income,rows[0].total_crop_net_income);
        }
      });

    function setValue(value,value2) {
                crop_gross = value;
                crop_total = value2;

                const {farmer_id} =req.body

                let sql = `SELECT total_gross_income,total_net_income FROM baseline_livehood_income WHERE farmer_id=${farmer_id}`;  

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
        
                    const farm_labour_net_income = Number(farm_labour_income)-Number(farm_labour_expenditure);
        
                    let farm_gross_income =Number( crop_live_gross)+Number(farm_labour_income);
                    let farm_net_income = Number(crop_live_total)+Number(farm_labour_net_income);

                    
            let sql = `SELECT * FROM base_farm_income WHERE farmer_id=${farmer_id}`;   
            let query = db.query(sql, (err, result) => {
                if(err) {
                    res.json(err.sqlMessage)
                }
            
            if(result.length==0){
                
                let post ={id,farmer_id,farm_labour_no_of_men_days,farm_labour_income,farm_labour_expenditure,farm_labour_net_income,farm_gross_income,farm_net_income }

                let sql = 'INSERT INTO base_farm_income SET ?';   
                let query = db.query(sql, post, (err, result) => {
                    if(err) {
                        res.json(err.sqlMessage)
                    }
                    let id = result.insertId;
                    
                    res.json({
                        msg:"Baseline Farm income saved successfully",
                        id
                    })
            
                });


            }else{
                res.json({
                    msg:"Data already exists",
                    id
                })

            }
    })



                    

                }
  
      }

})


router.post('/non_farm',(req,res)=>{
    const {farmer_id,wage_labour_no_of_men_days,wage_labour_income,wage_labour_expenditure,business_income,business_expenditure,job_net_income} = req.body;

    const wage_labour_net_income = Number(wage_labour_income)-Number(wage_labour_expenditure);
    const business_net_income= Number(business_income)-Number(business_expenditure);
    const b_j_net_income = Number(business_net_income)+Number(job_net_income);

    var gross_non_farm_income = Number(wage_labour_income)+Number(business_income)+Number(job_net_income);
    var net_non_farm_income = Number(wage_labour_net_income)+Number(b_j_net_income);

    let sql = `SELECT * FROM base_non_farm_income WHERE farmer_id=${farmer_id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }
    
    if(result.length==0){

        let post = {farmer_id,wage_labour_no_of_men_days,wage_labour_income,wage_labour_expenditure,wage_labour_net_income,business_income,business_expenditure,business_net_income,job_net_income,b_j_net_income,gross_non_farm_income,net_non_farm_income}

        let sql = 'INSERT INTO base_non_farm_income SET ?';
        let query = db.query(sql, post, (err, result) => {
            if(err) {
                res.json(err.sqlMessage)
            }
            let id = result.insertId;
            
            res.json({
                msg:"Baseline Non Farm income saved successfully",
                id
            })
    
        });

    }else{
        res.json({
            msg:"Data already exists",
            id
        })

        }
    })

  

})

router.post('/fishery',(req,res)=>{

    var {farmer_id,pond_size,liming,fertilizer,variety_1,variety_2,variety_3,variety_4,variety_5,variety1_amount,variety2_amount,variety3_amount,variety4_amount,variety5_amount,variety1_cost,variety2_cost,variety3_cost,variety4_cost,variety5_cost,fertilizer_cost,feed_cost,ph_water,intermediary_cost,total_cost,income_variety_1,variety1_sold_qty,variety1_sold_amount,income_variety_2,variety2_sold_qty,variety2_sold_amount,income_variety_3,variety3_sold_qty,variety3_sold_amount,income_variety_4,variety4_sold_amount,income_variety_5,variety5_sold_qty,variety5_sold_amount,} = req.body;

    let sql = `SELECT * FROM fishery WHERE farmer_id='${farmer_id}'`;
    let query  = db.query(sql,(err,result)=>{
        if(err){
            res.json(err.sqlMessage)
        }else{
            if(result.length>0){
                res.json("This Farmer Has Basline Data Already")
            }else{

                var fingerlig = Number(variety1_cost)+Number(variety2_cost)+Number(variety3_cost)+Number(variety4_cost)+Number(variety5_cost);
                var total_cost = Number(fingerlig)+Number(fertilizer_cost)+Number(feed_cost)+Number(intermediary_cost);
                var income = Number(variety1_sold_amount)+Number(variety2_sold_amount)+Number(variety3_sold_amount)+Number(variety4_sold_amount)+Number(variety5_sold_amount)
                var net_income = Number(income)-Number(total_cost);
                let post = {farmer_id,pond_size,liming,fertilizer,variety_1,variety_2,variety_3,variety_4,variety_5,variety1_amount,variety2_amount,variety3_amount,variety4_amount,variety5_amount,variety1_cost,variety2_cost,variety3_cost,variety4_cost,variety5_cost,fertilizer_cost,feed_cost,ph_water,intermediary_cost,total_cost,income_variety_1,variety1_sold_qty,variety1_sold_amount,income_variety_2,variety2_sold_qty,variety2_sold_amount,income_variety_3,variety3_sold_qty,variety3_sold_amount,income_variety_4,variety4_sold_amount,income_variety_5,variety5_sold_qty,variety5_sold_amount,income,net_income}

                let sql = 'INSERT INTO fishery SET ?';
                let query = db.query(sql, post, (err, result) => {
                    if(err) {
                        res.json(err.sqlMessage)
                    }
                    let id = result.insertId;
                    
                    res.json({
                        msg:"Baseline Fishery saved successfully",
                        id
                    })
            
                });
            }
        }
    }) 

})


router.post('/try',(req,res)=>{

    let farmer_id =2;
    let sql = `SELECT id FROM intervention WHERE farmer_id=${farmer_id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            
            res.json(err.sqlMessage)
        }
        
        if(result.length==0){
            res.send(result)
            
        }else{
            console.log(result[0].id)
        }

    });
})



module.exports = router;