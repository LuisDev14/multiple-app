import { useState } from "react";
import TodoItem from "../TodoItem";

const useTodo = () =>{
    const [list, setList] = useState([]);

    const addTodo = (todo) =>{
        setList([...list, {text:todo, done:false}]);
    }

    const removeTodo = (index) =>{
        setList(list.filter((_,i) => i !== index));
    }

    const updateTodo = (index, checked) =>{
        setList(
            list.map((todo, i)=>{
                if(i===index){
                    return {...todo, done:checked};
                }
                return todo;
            })
        );
    }

    return {list, addTodo, removeTodo, updateTodo};

}

export default useTodo;