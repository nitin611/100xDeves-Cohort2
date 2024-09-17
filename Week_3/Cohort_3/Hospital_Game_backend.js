// ==================================HOSPITAL GAME BACKEND===================================
const express=require('express')
const app=express();

app.use(express.json());

    let users=[{
        name:"John",
        kidneys:[
            {
                healthy:false,
            },
            {
                healthy:true
            }
        ]
    }]
// User can check how many kidneys they have and their health
app.get("/",(req,res)=>{
    const johnKidneys=users[0].kidneys;
    const numberofKidneys=johnKidneys.length;

    // finding number of healthy kidneys-
    let healthyKidneys=0;
    for(let i=0;i<numberofKidneys;i++){
        if(johnKidneys[i].healthy){
            healthyKidneys++;
        }
    }
    // calculation number of unhealthy kidneys-
    const unhealthyKidneys=numberofKidneys-healthyKidneys;
    // returning all reseults in json format-
    res.json({
        numberofKidneys,
        healthyKidneys,
        unhealthyKidneys
    });
});

//  User can add a new kidney
app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy;

     // add a new kidney to the first user in the users array
     users[0].kidneys.push({
        healthy:isHealthy
     })
     res.send("kidney added successfully");

});
//User can replace a kidney, make it healthy
// What should happen if they try to make a kidney healthy when all are already healthy?
app.put("/",(req,res)=>{
    if(thereisUnhealthyKidney()){
        for(let i=0;i<users[0].kidneys.length;i++){
            users[0].kidneys[i].healthy=true;
        }
        res.send("Kidney replaced successfully");
    }
    else{
        res.status(411).json({
            msg:"you dont have unhealthy kidneys",
        })
    }
});
// User can remove a kidney
// What should happen if they try to delete when there are no kidneys?
app.delete("/", (req, res) => {
    const kidneys = users[0].kidneys;

    // Step 1: Check if there are any unhealthy kidneys
    if (thereisUnhealthyKidney()) {
        const newKidneys = [];

        // Add only the healthy kidneys to the new array
        for (let i = 0; i < kidneys.length; i++) {
            if (kidneys[i].healthy) {
                newKidneys.push({ healthy: true });
            }
        }
        // Update the user's kidneys to only include healthy ones
        users[0].kidneys = newKidneys;

        res.json({
            msg: "Unhealthy kidneys removed successfully!",
        });
    } else {
        //  If there are no unhealthy kidneys, ensure only 2 healthy kidneys remain
        const healthyKidneys = kidneys.filter(kidney => kidney.healthy);

        // If more than 2 healthy kidneys
        if (healthyKidneys.length > 2) {
            users[0].kidneys = [
                ...healthyKidneys.slice(0, 2), 
            ];

            res.json({
                msg: "Extra healthy kidneys removed. 2 healthy kidneys retained.",
                kidneys: users[0].kidneys
            });
        } else {
            // No unhealthy kidneys and no need to remove excess healthy ones
            res.status(411).json({
                msg: "There are 2 or fewer healthy kidneys. No need to remove any.",
            });
        }
    }
});

// Helper function to check if there's at least one unhealthy kidney
function thereisUnhealthyKidney() {
    return users[0].kidneys.some(kidney => !kidney.healthy);
}


function thereisUnhealthyKidney(){
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            // if there is unhealthy kdiney then-
            return true;
        }
    }
    // if there is no unhealthy kidneys-
    return false;
}



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})