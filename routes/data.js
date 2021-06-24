const express = require('express');
const bodyparser = require ("body-parser");
const app = express();
const router = express.Router();
const auth = require('../middleware/auth');
var db = require('../db');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


router.get('/block',(req,res)=>{
    let sql = `SELECT * FROM block`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
        console.log(result)
    })
})

router.post('/gp',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM gp WHERE block_id =${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/village',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM village WHERE GP_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/shg',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM shg WHERE vill_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/benificary',(req,res)=>{
    const {id,vill_id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN baseline_crop_income ON baseline.id = baseline_crop_income.farmer_id LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN baseline_livehood_income ON baseline.id = baseline_livehood_income.farmer_id  LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.shg_id=${id} AND baseline.village_id=${vill_id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/benificaryvill',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN baseline_crop_income ON baseline.id = baseline_crop_income.farmer_id LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN baseline_livehood_income ON baseline.id = baseline_livehood_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.village_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/benificarygp',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN baseline_crop_income ON baseline.id = baseline_crop_income.farmer_id LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN baseline_livehood_income ON baseline.id = baseline_livehood_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.gp_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err)
            console.log(err)
        }

        res.json(result)
    })
})

// router.post('/benificarygp',(req,res)=>{
//     const {id} = req.body;
//     let sql = `SELECT * FROM baseline LEFT JOIN baseline_crop_income ON baseline.id = baseline_crop_income.farmer_id LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN baseline_livehood_income ON baseline.id = baseline_livehood_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.gp_id=${id}` ;   
//     let query = db.query(sql, (err, result) => {
//         if(err) {
//             res.json(err)
//             console.log(err)
//         }

//         res.json(result)
//     })
// })




router.post('/member',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline WHERE shg_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/member_detail',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline WHERE id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.post('/member_village',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM village WHERE id=${id}`;  
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/member_shg',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM shg WHERE id=${id}`;  
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/crop_income',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM midline_crop_income WHERE farmer_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})
router.post('/livestock_income',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM midline_livehood_income WHERE farmer_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})
router.post('/non_farm',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM mid_non_farm_income WHERE farmer_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/farm',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM mid_farm_income WHERE farmer_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/base_farm',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM base_farm_income WHERE farmer_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/base_non_farm',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM base_non_farm_income WHERE farmer_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/basefish',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM fishery WHERE farmer_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/mid',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM mid_fishery WHERE farmer_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/intervention',(req,res)=>{
    const {id} = req.body;
    console.log(id)

    let sql = `SELECT * FROM intervention WHERE farmer_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


///////////////////////MIDLINE//////////////////////

router.post('/midbenificary',(req,res)=>{
    const {id,year} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN midline_crop_income ON baseline.id = midline_crop_income.farmer_id LEFT JOIN mid_farm_income ON baseline.id = mid_farm_income.farmer_id LEFT JOIN mid_non_farm_income ON baseline.id = mid_non_farm_income.farmer_id LEFT JOIN midline_livehood_income ON baseline.id = midline_livehood_income.farmer_id  WHERE shg_id=${id} AND mid_farm_income.year=${year}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/midbenificaryvill',(req,res)=>{
    const {id,year} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN midline_crop_income ON baseline.id = midline_crop_income.farmer_id LEFT JOIN mid_farm_income ON baseline.id = mid_farm_income.farmer_id LEFT JOIN mid_non_farm_income ON baseline.id = mid_non_farm_income.farmer_id LEFT JOIN midline_livehood_income ON baseline.id = midline_livehood_income.farmer_id  WHERE village_id=${id} AND mid_farm_income.year=${year}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/midbenificarygp',(req,res)=>{
    const {id,year} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN midline_crop_income ON baseline.id = midline_crop_income.farmer_id LEFT JOIN mid_farm_income ON baseline.id = mid_farm_income.farmer_id LEFT JOIN mid_non_farm_income ON baseline.id = mid_non_farm_income.farmer_id LEFT JOIN midline_livehood_income ON baseline.id = midline_livehood_income.farmer_id  WHERE gp_id=${id} AND midline_crop_income.year=${year}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})



router.post('/interventionDetail',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN intervention ON baseline.id = intervention.farmer_id  WHERE shg_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/interventionDetailVill',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN intervention ON baseline.id = intervention.farmer_id  WHERE village_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

//////COUNT//////

router.post('/blockCount',auth,(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT COUNT(*) AS count FROM block` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.post('/gpCount',auth,(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT COUNT(*) AS count FROM gp` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.post('/villCount',auth,(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT COUNT(*) AS count FROM village` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/villCount',auth,(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT COUNT(*) AS count FROM village` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/shgCount',auth,(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT COUNT(*) AS count FROM shg` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/beniCount',auth,(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT COUNT(*) AS count FROM baseline` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


//////////////IMPACT///////////

router.post('/impact',(req,res)=>{
    const {id,year} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN intervention ON baseline.id = intervention.farmer_id LEFT JOIN shg ON baseline.shg_id = shg.shg_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN mid_farm_income ON baseline.id = mid_farm_income.farmer_id LEFT JOIN mid_non_farm_income ON baseline.id = mid_non_farm_income.farmer_id WHERE baseline.shg_id=${id} AND midline_crop_income.year=${year}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/impactvill',(req,res)=>{
    const {id,year} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN intervention ON baseline.id = intervention.farmer_id LEFT JOIN baseline_crop_income ON baseline.id = baseline_crop_income.farmer_id LEFT JOIN shg ON baseline.shg_id = shg.shg_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN mid_farm_income ON baseline.id = mid_farm_income.farmer_id LEFT JOIN mid_non_farm_income ON baseline.id = mid_non_farm_income.farmer_id WHERE baseline.village_id=${id} AND midline_crop_income.year=${year}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.post('/impactgp',(req,res)=>{
    const {id,year} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN midline_crop_income ON baseline.id = midline_crop_income.farmer_id LEFT JOIN intervention ON baseline.id = intervention.farmer_id  LEFT JOIN baseline_crop_income ON baseline.id = baseline_crop_income.farmer_id LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN shg ON baseline.shg_id = shg.shg_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN mid_farm_income ON baseline.id = mid_farm_income.farmer_id LEFT JOIN mid_non_farm_income ON baseline.id = mid_non_farm_income.farmer_id  WHERE baseline.gp_id=${id} AND midline_crop_income.year=${year}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})





router.post('/fishimpact',(req,res)=>{
    const {id,year} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN shg ON baseline.shg_id = shg.shg_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN fishery ON baseline.id = fishery.farmer_id LEFT JOIN mid_fishery ON baseline.id = mid_fishery.farmer_id  WHERE baseline.shg_id=${id} AND mid_fishery.year=${year}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})




router.post('/fishimpactvill',(req,res)=>{
    const {id,year} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN shg ON baseline.shg_id = shg.shg_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN fishery ON baseline.id = fishery.farmer_id LEFT JOIN mid_fishery ON baseline.id = mid_fishery.farmer_id  WHERE village_id=${id} AND mid_fishery.year=${year}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.post('/fishimpactgp',(req,res)=>{
    const {id,year} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN shg ON baseline.shg_id = shg.shg_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN fishery ON baseline.id = fishery.farmer_id LEFT JOIN mid_fishery ON baseline.id = mid_fishery.farmer_id  WHERE baseline.gp_id=${id} AND mid_fishery.year=${year}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})





// router.post('/profile',(req,res)=>{
//     const {land,id} = req.body;
//     let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id  WHERE baseline.total_land>${land} AND shg_id=${id}`;   
//     let query = db.query(sql, (err, result) => {
//         if(err) {
//             res.json(err.sqlMessage)
//         }

//         res.json(result)
//     })
// })

// router.post('/profilepond',(req,res)=>{
//     const {id} = req.body;
//     let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id  WHERE baseline.total_land>5 AND shg_id=${id}` ;   
//     let query = db.query(sql, (err, result) => {
//         if(err) {
//             res.json(err.sqlMessage)
//         }

//         res.json(result)
//     })
// })


router.post('/profileshgcat1',(req,res)=>{

    const {land,id} = req.body;

    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.total_land BETWEEN 0 AND 1 AND baseline.shg_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/profileshgcat2',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.total_land BETWEEN 1 AND 5 AND baseline.shg_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/profileshgcat3',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.total_land>5 AND baseline.shg_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})




router.post('/profilevillcat1',(req,res)=>{

    const {land,id} = req.body;

    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.total_land BETWEEN 0 AND 1 AND baseline.village_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/profilevillcat2',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.total_land BETWEEN 1 AND 5 AND baseline.village_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/profilevillcat3',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id  LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.total_land>5 AND village_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})



///////GP//////


router.post('/profilegpcat1',(req,res)=>{

    const {land,id} = req.body;

    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id  LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.total_land BETWEEN 0 AND 1  AND baseline.gp_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})
router.post('/profilegpcat2',(req,res)=>{

    const {land,id} = req.body;

    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.total_land BETWEEN 1 AND 5  AND baseline.gp_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/profilegpcat3',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN base_farm_income ON baseline.id = base_farm_income.farmer_id LEFT JOIN base_non_farm_income ON baseline.id = base_non_farm_income.farmer_id LEFT JOIN village ON baseline.village_id = village.vill_id LEFT JOIN gp ON baseline.gp_id=gp.gp_id  LEFT JOIN shg ON baseline.shg_id=shg.shg_id WHERE baseline.total_land>5 AND baseline.gp_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})



router.post('/basefihsery',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN fishery ON baseline.id = fishery.farmer_id WHERE shg_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/basefihseryvill',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN fishery ON baseline.id = fishery.farmer_id WHERE village_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/basefihserygp',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN fishery ON baseline.id = fishery.farmer_id WHERE gp_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.post('/midfihsery',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN mid_fishery ON baseline.id = mid_fishery.farmer_id WHERE shg_id=${id}`;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/midfihseryvill',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN mid_fishery ON baseline.id = mid_fishery.farmer_id WHERE village_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.post('/midfihserygp',(req,res)=>{
    const {id} = req.body;
    let sql = `SELECT * FROM baseline LEFT JOIN mid_fishery ON baseline.id = mid_fishery.farmer_id WHERE gp_id=${id}` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.get('/cat1',auth,(req,res)=>{
   
    let sql = `SELECT COUNT(*) AS cat1 FROM baseline WHERE  total_land BETWEEN 0 AND 0.6` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.get('/cat2',auth,(req,res)=>{
   
    let sql = `SELECT COUNT(*) AS cat2 FROM baseline WHERE  total_land BETWEEN 0.6 AND 5` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.get('/cat3',auth,(req,res)=>{
   
    let sql = `SELECT COUNT(*) AS cat3 FROM baseline WHERE total_land >5` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.get('/bezera',auth,(req,res)=>{
   
    let sql = `SELECT ROUND(AVG(farm_net_income) ,0) AS "Avg" FROM base_farm_income LEFT JOIN baseline ON base_farm_income.farmer_id=baseline.id WHERE baseline.block_id=1` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.get('/mangaldai',auth,(req,res)=>{
   
    let sql = `SELECT ROUND(AVG(farm_net_income) ,0) AS "Avg" FROM base_farm_income LEFT JOIN baseline ON base_farm_income.farmer_id=baseline.id WHERE baseline.block_id=2` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})

router.get('/midbezera',auth,(req,res)=>{
   
    let sql = `SELECT ROUND(AVG(mid_farm_net_income) ,0) AS "Avg" FROM mid_farm_income LEFT JOIN baseline ON mid_farm_income.farmer_id=baseline.id WHERE baseline.block_id=1` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})


router.get('/midmangaldai',auth,(req,res)=>{
   
    let sql = `SELECT ROUND(AVG(mid_farm_net_income) ,0) AS "Avg" FROM mid_farm_income LEFT JOIN baseline ON mid_farm_income.farmer_id=baseline.id WHERE baseline.block_id=2` ;   
    let query = db.query(sql, (err, result) => {
        if(err) {
            res.json(err.sqlMessage)
        }

        res.json(result)
    })
})














module.exports = router;