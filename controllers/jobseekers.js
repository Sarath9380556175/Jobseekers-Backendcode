const jobseekers=require('../models/jobsearchers')

exports.getjobseekersdetails=(req,res)=>{
const request=req.body;

const usn=request.usn;
const name=request.name;
const gender=request.gender;
const email=request.email;
const alternateemail=request.alternateemail;
const mobilenumber=request.mobilenumber;
const dateofbirth=request.dateofbirth;
const course=request.course;
const YOP=request.YOP;
const UGMarks=request.UGMarks;
const diploma=request.diploma;
const diplomabranch=request.diplomabranch;
const diplomapercentage=request.diplomapercentage;
const twelvethpercentage=request.twelvethpercentage;
const tenthpercentage=request.tenthpercentage;
const nameofthecollege=request.nameofthecollege;
const city=request.city;
const state=request.state;
const universityname=request.universityname;

const Jobseekers=new jobseekers({usn:usn,name:name,gender:gender,email:email,alternateemail:alternateemail,mobilenumber:mobilenumber,dateofbirth:dateofbirth,
course:course,YOP:YOP,UGMarks:UGMarks,diploma:diploma,diplomabranch:diplomabranch,diplomapercentage:diplomapercentage,twelvethpercentage:twelvethpercentage,
tenthpercentage:tenthpercentage,nameofthecollege:nameofthecollege,city:city,state:state,universityname:universityname})

Jobseekers.save()

.then(response=>res.status(200).json({message:'details stored successfully', Jobseekersdetails:response}))

.catch(error=>res.status(500).json({err:error}))

}