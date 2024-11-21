import { useEffect, useState } from 'react'
import { memo } from 'react';
import './App.css'


function App() {
  // const [todos,setTodos]=useState([
  //   {
  //     id:1,
  //     title:"Go to library",
  //     description:"Have to go to library tommorow"

  //   },
  //   {
  //     id:2,
  //     title:"Go to class",
  //     description:"Have to go to class"

  //   },
  //   {
  //     id:3,
  //     title:"Go to take bath",
  //     description:"Have to go to nahana"
  //   }
  // ]);

  const [todos,setTodos]=useState([]);

  // function addTodo(){
  //   // using spread syntax-----
  //   // here spread all the existing todo and add the last todo in the end -
  //   setTodos([...todos,{
  //     id:counter++,
  //     title:Math.random(),
  //     description:Math.random()
  //   }])
  //   // ----------------dusra simple tarika---------------------
  //   const newTodos=[];
  //   // iterate over original array- 
  //   for(let i=0;i<todos.length;i++){
  //     newTodos.push(todos[i]);
  //   }
  //   // here the old todo is ===newTodos.now push the newTodos --
  //   newTodos.push({
  //     id:2,
  //     title:Math.random(),
  //     description:Math.random()
  //   });
  //   // call setTodos to render the changes-
  //   setTodos(newTodos);
  // }
// ------------------------------useEffect hook----------------------------
// -----here hamloag har 3 sec pe database se data render kar rahe hai continously using useEffect and setInterval-
// 
// --------use useAsyncEffect library in useEffect to use the async await syntax by default cant use this-

  useEffect(()=>{
    setInterval(() => {
      fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json=await res.json();
        setTodos(json.todos)
      })
    }, 3000);
  },[]);

  return (
 <div>
  
  {/* iterating over the map and rendring all the todos- */}
  {/* <button onClick={addTodo}>Add toDo</button> */}

    {/* --------------Add an id whenever using list or adding list --------------------- */}

  {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}

  {/* ----------------another way to iterate using map without arrow function ---------- */}

  {/* {todos.map(function(todo){
    return <Todo title={todo.title} description={todo.description}/>
  })} */}

 </div>

  )

}
function Todo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>
    <p>
      {description}
    </p>
  </div>
}
// ------------------------------------------WRAPPER COMPONENT-------------------------------------

// function App(){
//   return <div>
//      <CardWrapper>
//       hello
//      </CardWrapper>
//      <CardWrapper>
//       <div>
//         <p>hello from inside div</p>
//       </div>
//      </CardWrapper>
//   </div>
// }
 
// // ---here cardWrapper div will be same but content uske andar ka textComponent ko badal ke change kar sakte hai---
// function CardWrapper({children}){
//     // create a div which has a border and inside the div render the prop-
//     return <div style={{border:"2px solid black", padding:"3px", margin:"5px"}}>

//       {children}

//     </div>
// }


export default App
