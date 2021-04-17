const express=require('express');

const router=express.Router();
const jobcontroller=require('../controllers/jobseekers')
router.post('/jobseekers', jobcontroller.getjobseekersdetails)

module.exports=router;