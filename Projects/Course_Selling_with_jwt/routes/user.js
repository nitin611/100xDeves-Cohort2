const { Router } = require("express");
const router = Router();
const { Admin, User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const jwt=require('jsonwebtoken')
const { jwt_secret } = require("../config");


// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic-
    const username=req.body.username
    const password=req.body.password

    await User.create({
        username,
        password
    })
    res.json({
        msg:"User created successfylly!!"
    })
});

router.post('/signin', async(req, res) => {
    // Implement user sign in  logic give user the jwt after signin -
    const username=req.body.username
    const password=req.body.password
    // check if username and password is there in the db or not-
    const user=await User.findOne({username,password});
    if(user){
        const token=jwt.sign({username},jwt_secret)
        res.json({
            msg:"Login successful!!",
            token
        })
    }
    else{
        res.status(403).json({
            msg:"Invalid userName or password"
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic-
    // take username from the middleware- here we are taking username from the middleware not from the header or body
    const username=req.username;
    const courseId = req.params.courseId;
    await User.updateOne({
        username:username,

    },{
        "$push":{
            purchasedCourses:courseId
        }
    })
    res.json({
        msg:"Course purchased successfully"
    })

    
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic-
    const user=await User.findOne({
        username:req.username
    })
    const courses=await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })

});

module.exports = router