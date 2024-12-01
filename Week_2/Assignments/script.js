
// Task-1-counter---------------------------------
function counter(num){
    if(num<=30){
        console.log(num);
        setTimeout(()=>{
            counter(num+1);
        },1000)
    }
}
counter(1);

// Task-2---------------------Reading content from txt file----

// console.log("This is before reading a file: ");
// const fs=require('fs');
// fs.readFile('read.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
//     console.log("Ihave read the file waiting for this lauru")
// });
// let data = "This is a file containing a collection of books.";
 
// fs.writeFile("read.txt", data, (err) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log("File written successfully\n");
//     console.log("The written has the following contents:");
   
//   }
// });

// // doing expensive task-
// let sum=0;
// for(let i=0;i<10000000000;i++){
//     sum+=i;
// }
// console.log(sum);

