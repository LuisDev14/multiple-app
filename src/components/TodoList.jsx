import { useState } from "react";
import useTodo from "./hooks/useTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const { list, addTodo, removeTodo, updateTodo } = useTodo();

  return (
    <div className="flex-1 w-full flex flex-col gap-4 px-4">
      <form action="">
        <input type="text" onChange={({target})=>{setInputValue(target.value)}} />
        <button onClick={()=>{addTodo(inputValue)}}>Guardar</button>
      </form>
      <ul>
        {list.map((todo,index) => () => (
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            index={index}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
