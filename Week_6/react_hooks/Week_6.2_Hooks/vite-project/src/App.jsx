import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

// function App() {
//   // const [todos,setTodos]=useState([]);
//   const [selectedId,setSelectedId]=useState("66effc1b0fc9e5560c78e4eb");
//   // useEffect(()=>{
//   //   axios.get("http://localhost:3000/todos")
//   //   .then(function(res){
//   //     setTodos(res.data.todos)
//   //   })


//   // },[]);

//   return (
//    <div>
//     {/* -----------------------------work-1 ------------------------*/}

//    {/* {todos.map(todo=><Todo title={todo.title} description={todo.description}/>)} */}


//    {/* --------------------------------work2-------------------- */}
//    <button onClick={function(){
//     setSelectedId("66effc1b0fc9e5560c78e4eb")
//    }}>1</button>
//    <button onClick={function(){
//     setSelectedId("66f00ade654e3f787c7e8574")
//    }}>2</button>
//    <button onClick={()=>{
//     setSelectedId("66f00bd6654e3f787c7e8576")
//    }}>3</button>
//    <button onClick={()=>{
//     setSelectedId("66f00ade654e3f787c7e8574")
//    }}>4</button>
//    <Todo id={selectedId} />
//    </div>
//   )
 

// }
// // -------------------------------------2nd work pasting the data of backend--------------------------
// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch(`http://localhost:3000/todo/${id}`) // Send id as part of the URL
//       .then(async function (res) {
//         const json = await res.json();
//         setTodo(json.todo);
//       })
//       .catch((error) => {
//         console.error("Error fetching todo:", error);
//       });
//   }, [id]); // Add id if id changes backend request will go -

//   return (
//     <div>
//       <h2>Todo Details</h2>
//       <p>Title: {todo.title}</p>
//       <p>Description: {todo.description}</p>
//       <p>Completed: {todo.completed ? "Yes" : "No"}</p>
//     </div>
//   );
// }
// // ---------------------work -1-------------------------
// // function Todo({title,description}){
// //   return <div>
// //     <h1>{title}</h1>
// //     <p>{description}</p>
// //   </div>
// // }

// --------------------------use Memo---------------------------------------------
// ----------------------------------------task-----------------------------
// If I ask you to create an app that does two things -
// 1. Increases a counter by 1
// 2. Lets user put a value in an input box (n) and you need
// to show sum from 1-n
// One restriction - everything needs to be inside App-

function App(){
  const [count,setCount]=useState(0);
  const [sum,setSum]=useState(1);
  // const [finalvalue,setFinalvalue]=useState(0);
  // when we click counter it rerender whole thing, so the whole for loop is running again:-
  // we can get rid of it by using useEffect and with one more state variable wrap it around use effect:-
                      // useEffect(()=>{
                      //   let sumtill=0;
                      // for(let i=1;i<=sum;i++){
                      // sumtill+=i;
                      // }
                      // setFinalvalue(sumtill)
                      // },[sum]);
  // ----------------------------------------USEMEMO-------------------------------------------------------
  // with useMEMO approach  sumtill deoend on input value or if something depend on input we can use USEMEMO then
  // useEffect, we can use useEffect for sure, but can use USEMEMO also ,useMEmo is slightly better then useEffect
  // as it render 2 times the useEffect while usememo 1 time. 
  // you can always use useEffect approach for sure-
  
  let sumtill=0;
  for(let i=1;i<=sum;i++){
    
   sumtill+=i;

  }

  
  return(
  
    <div>
      <input type="text" placeholder='enter the number' onChange={function(e){
        setSum(e.target.value)
      }} />
      <br />
      sum from 1 to {sum} is {sumtill}
      <br />
      <button onClick={()=>setCount(count+1)}>Counter:{count}</button>
    </div>
  )
  
    
    
  
}


export default App
