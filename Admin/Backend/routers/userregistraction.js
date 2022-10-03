const express = require('express');
const router  = express.Router();
const { body, validationResult} = require('express-validator')
const Details = require('../models/details');


router.post('/signup',[
    body('firstname'),body('lastname'),body('email').isEmail(),
    body('id'),body('university'),body('designation'),body("idname"),body('photoName')
] ,async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }
    let details = await Details.findOne({email: req.body.email});
    if (details){
        return res.status(400).json({error: "Email Already Exist."})
    }
    else{
        await Details.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.lastname,
            id: req.body.id,
            university: req.body.university,
            designation: req.body.designation,
            idname: req.body.idname,
            photoName: req.body.photoName
        }).then((detail)=>{
            console.log("Details Entered into detabase");
            res.statuscode = 200;
            res.setHeader('content-Type','text/plain');
            res.json({"statusMessage": "Deatils hs been send to the admin"})
        }).catch((err) => next(err));
        }
    }
)