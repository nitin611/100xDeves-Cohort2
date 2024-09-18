const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin}=require("../db")
const router = Router();
const { Course } = require('../db');  


// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password

    // check if username is already there -
    //------------------------------------------- using .then syntax---------------------

    // Admin.create({
    //     username:username,
    //     password:password,
    // })
    // .then(()=>{
    //     res.json({
    //         msg:"Admin created successfully"
    //     })
    // })
    // .catch(()=>{
    //     res.json({
    //         msg:"Admin not created"
    //     })
    // })

    //---------------------------------------- with async await --------------------

     await Admin.create({
        username:username,
        password:password,
    })
    res.json({
        msg:"Admin created successfully!!"
    })

  
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const descreption=req.body.descreption;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    // use zod for input validation abhi hamlog simple bana rahe so will not use-
  const newCourse = await Course.create({
        title,
        descreption,
        imageLink,
        price
    })
    
    // yaha hamlog ko course id bhi print karna so we have to use async await to wait for generation of id
    res.json({
        msg:"Course created successfully",courseId:newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})

    res.json({
        courses:response
    })
});
// put request to update the course for admin
module.exports = router;