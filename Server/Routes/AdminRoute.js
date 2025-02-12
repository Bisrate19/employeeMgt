// all the apis

import express from "express";
import con from "../utils/db.js"





const router = express.Router();

router.post("/adminlogin", (req, res) => {
const sql = "select * from admin where email = ? and password = ?"
con.query(sql,[req.body.email, req.body.password], (err,result) =>{
    if (err) return res.json({loginStatus: false, Error: "Query error"})
        if(result.length > 0){
            const email = result[0].email;
        }
} )



});


export {router as adminRouter}