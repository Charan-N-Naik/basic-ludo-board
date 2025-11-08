
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
export default function Todo(){
    let [todos,settodos]=useState([{id:uuidv4(),task:"sample",isDone:false}]);
    let [newtodo,setnewtodo]=useState("")
    let [deletetodo,setdeletetodo]=useState(todos)

    let addNewTodo=()=>{
        settodos([...todos,{id:uuidv4(),task:newtodo,isDone:false}])
        setnewtodo("");

    }
    let updateTodoValue=(event)=>{
        // console.log(event.target.value);
        setnewtodo(event.target.value);
    }
    let deleteTodo=(id)=>{// for deleteing we are useing  the filter ,extracting we are useing the map and refere the rect website to get the more info about the which one we are using for which one funcion
        // console.log(id)
        const copy =todos.filter((todo)=>id!=todo.id)
        // console.log(copy);
        settodos(copy);
    }
    // let updateArray=(id)=>{

    //     const udpate=todos.map((todo)=>{
    //         if(todo.id==id){
    //            return {
    //             ...todo,todo.task.toUpperCase()};
    //         }
    // });
        
    // }
    let updateArray=(id)=>{
        settodos(
            (prev)=>
                prev.map((todo)=>{
                    if(todo.id==id){
                        return {
                            ...todo,
                            task:todo.task.toUpperCase()
                        }
                    }
                    else{
                       return todo
                    }

                })
            
        )
    }
    let updateAll=()=>{
        settodos(
            (prev)=>
                prev.map((todo)=>{
                     return {
                            ...todo,
                            task:todo.task.toUpperCase()
                        }
                   

                })
            
        )
    }
      let marksASAllDone=()=>{
        settodos(
            (prev)=>
                prev.map((todo)=>{
                     return {
                            ...todo,
                           isDone:true
                        }
                   

                })
            
        )
    }
      let MarkAsDone=(id)=>{
        settodos(
            (prev)=>
                prev.map((todo)=>{
                    if(todo.id==id){
                        return {
                            ...todo,
                            isDone:true
                        }
                    }
                    else{
                       return todo
                    }

                })
            
        )
    }
    

    
    
    
    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" 
            value={newtodo}
            placeholder="Enter the task" 
            style={{width:"300px",height:"40px",marginLeft:"30px"}} 
            onChange={updateTodoValue}
            />
            <button style={{margin:"20px"}} onClick={addNewTodo}>Add todo</button>
            <br />
            <hr />
            <h2>List todo</h2>
            <ol>
                {todos.map((todo)=>{
                 return <li key={todo.id}>
                    <span style={todo.isDone?{ textDecorationLine: 'line-through' }:{}}>{todo.task}</span>
                    <button onClick={()=>deleteTodo(todo.id)} style={{margin:"20px 0px 0px 20px"}}>Delete</button>
                    <button onClick={()=>updateArray(todo.id)} style={{margin:"20px 0px 0px 20px"}}>set one to upercase</button>
                    <button onClick={()=>MarkAsDone(todo.id)} style={{margin:"20px 0px 0px 20px"}}>Mark as Done</button>
                </li>})}
            </ol>
            <button onClick={updateAll}>All are Upper case</button>
            <br /><br />
            <button onClick={marksASAllDone}>All task mark as done</button>
        </div>
    );
}