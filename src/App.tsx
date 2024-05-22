import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";



// let role:[number,string];
// role=[5,"stu"];
// only number,string allowed and that to in only 2 allowed.
// function App() {
//   return (
//     <div>Hello World
//     </div>
//   );
// }
const App: React.FC = () => {
  const [todo,setToDo]=useState<string>("");
  // console.log(todo);
  const [todos, setTodos] = useState<Todo[]>([]);
  // Array of TODOS
  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      // setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
      setToDo("");
    }  
  }
  return (
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setToDo={setToDo} handleAdd={handleAdd} />
          <TodoList todos={todos} setTodos={setTodos}/>
      </div>

  );
}
export default App;
