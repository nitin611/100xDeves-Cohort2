

const url="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#fact");
const btn=document.getElementById("getfact")



// let promise=fetch(url);
// console.log(promise);

// -----------------------------------USING ASYNC AWAIT---------------------------------
// const getFacts = async ()=>{
//     console.log("fetching data ....")
//     let response=await fetch(url);
//     console.log(response);
//     let data=await response.json();
//     // console.log(data[0].text);
//     factpara.innerText=data[3].text;

// };

// -------------------------------USING .THEN.CATCH----------------------------------
function getFacts(){
    fetch(url)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                console.log(data);
                factpara.innerText=data[2].text;
            });

}

btn.addEventListener("click",getFacts);
