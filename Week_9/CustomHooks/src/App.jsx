import { useEffect, useState } from 'react'
import axios from 'axios'
// import useDebounce from './useDebounce';

// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos);
//           setLoading(false);
//         })
//     }, n * 1000)
  
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })

//     return () => {
//       clearInterval(value)
//     }
//   }, [n])

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos(10);

//   if (loading) {
//     return <div> loading... </div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }




// ------------------------------------------------useIsOnline----------------------------------------------------


// function useIsOnline(){
//   const [isOnline,setIsOnline]=useState(window.navigator.onLine);
//   useEffect(()=>{
//     window.addEventListener("online",()=>{
//       setIsOnline(true)
//     })

//     window.addEventListener("offline",()=>{
//       setIsOnline(true);
//     })
//   },[]);
//   return isOnline;
// }

// function App(){
//   const isOnline=useIsOnline();

//   if(isOnline){
//     return "you are online!!!,Boyah"

//   }
//   return "Oh no , You are offline , please connect to the internet"
// }


// --------------------------TIMER BASED HOOKS--------------------------------------------------------


// function useInterval(fn,timeout){

//   useEffect(()=>{
//     setInterval(() => {
//       fn()
//     }, timeout);
//   },[]);
// }
// function App() {
//   const [count, setCount] = useState(0);
//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

// ----------------------------------------------------USEDEBOUNCE HOOK--------------------------------------



// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // You can use debouncedValue to trigger your search logic, such as calling an API

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;


// export default App