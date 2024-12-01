const express=require("express");
const app=express();

app.use(express.json());

var user=[
    {
        name:"Nitin",
        age:21,
        kidneys:[
            {healthy:true

            },
            {
                healthy:true
            }
        ]
    },
    
];

app.get("/",function(req,res){
    // how many kidneys he have- how many are healthy and how many are not healthy;
    // finding no of kidneys-
    const nitinkidneys=user[0].kidneys;
    const numberofkidneys=nitinkidneys.length;
    let numberofHealthyKidneys=0;
    for(let i=0;i<numberofkidneys;i++){
        if(nitinkidneys[i].healthy){
            numberofHealthyKidneys+=1;
        }
    }
    const numberofunHealthyKidneys=numberofkidneys-numberofHealthyKidneys;
    res.json({
        numberofkidneys,
        numberofHealthyKidneys,
        numberofunHealthyKidneys
    })

})
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    user[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })

})

// replace all unhealthy kidneys--------

app.put("/",function(req,res){
 for(let i=0;i<user[0].kidneys.length;i++){
    user[0].kidneys[i].healthy=true;
 }
 res.json({msg:"replaced unhealthy"});
})

app.delete("/",function(req,res){
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i<user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({msg: "done"})   
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3000);