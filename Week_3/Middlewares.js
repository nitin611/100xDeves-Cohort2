const express=require("express")
const app=express();


// ------------------------------------------middle ware-----
// ----------------------------------AUTHENTICATION CHECK MIDDLEWARE----------
function userMiddleware(req,res,next){
    const username=req.headers.username;
    const pass=req.headers.pass;
    if(username !="Nitin" || pass!="pass"){
        res.status(400).json({"msg":"something wrong in your input"});
        return;
    }
    else{
        next();
    }
}
// -----------------------------------INPUT VALIDATION---------------------

function kidneyMiddleware(req,res,next){
    const kidneyId=req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({"msg":"your no of kidneys are wrong"});
        return;
    }
    else{
        next();
    }
}

// ----------------------------------routes------
app.use(userMiddleware,kidneyMiddleware);
// or we can define these middleware in each routes we create after routes before functions so named as middlewares
app.get("/health-checkup",(req,res)=>{


    // your kidney logic do something with kidney-

    res.json({
        msg:"your kidney is fine !"
    })
});
app.listen(5000);