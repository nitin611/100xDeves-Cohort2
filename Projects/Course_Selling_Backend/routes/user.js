const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user"); 
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
     // check if username is already there -
     await User.create({
        username,
        password
     })
     res.json({
        msg:"User created successfully!!"
     });


});
// see all the courses that is available present like in udemy without signup or login---
router.get('/courses', async(req, res) => {
    // Implement listing all courses logic-
        const allCourses=await Course.find({})
        res.json({
            courses:allCourses
        })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    
    const courseId = req.params.courseId;
    const username = req.headers.username;
     
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
    //see all the purchase course on the dashboard of the user-
    const user=await User.findOne({
        username:req.headers.username
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