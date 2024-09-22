// here we have to render the todo task that the user will give -
// syntax of the array that we  will get will be like this-
// todos=[
//     {
            // title:"go to gym",
            // desciption:"WILL GO IN THE MORNING",
//     }
// ]
// here we get todos as input with props-
export function Todos({ todos }) {
    // Render all elements of the array one by one using map
    return (
      <div>
        {todos.map(function(todo, index) {
            return (
              <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed === true ? "Completed" : "Mark as completed"}</button>
              </div>
            )
        })}
      </div>
    )
}
