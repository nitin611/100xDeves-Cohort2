const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db");
const jwt=require('jsonwebtoken')
const {jwt_secret} = require("../config");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    await Admin.create({
        username,
        password
    });
    res.json({
        msg:"Admin created successfully"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin sigin logic-
    const username=req.body.username;
    const password=req.body.password;

    // auth check-
    const admin = await Admin.findOne({ username, password });
    if(admin){
        const token = jwt.sign({ username }, jwt_secret, { expiresIn: '1h' });
        res.json({
            msg: "Login successful",
            token
        });
    }
    else{
        res.status(403).json({
            msg:"Incorrect user name or password"
        });
    }

   


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});
// update the course that is created successfully-


module.exports = router;