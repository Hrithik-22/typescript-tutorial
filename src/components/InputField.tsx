import React,{useRef} from "react";
import "./style.css";

interface TodoProps{
  todo:string;
  setToDo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}
const InputField:React.FC<TodoProps> = ({todo,setToDo,handleAdd}) => {
  const inputRef=useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
      }}
        
    >
      <input
        type="text"
        ref={inputRef}
        value={todo}
        onChange={(e)=> setToDo(e.target.value)}
        placeholder="Enter a Task"
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;