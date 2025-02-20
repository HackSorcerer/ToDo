import './App.css';
import { useState } from 'react';

function App() {
  let [todo,setTodo]= useState([]);                        // initialize state with empty array
  
  
  let saveTodo=(e)=>{
    let toname = e.target.toname.value;
    if(!todo.includes(toname)){                           // check if the element already exist in the array
      
      let finalTodo = [...todo,toname];                   // array spread ... operator selects all the elements of the array and toname add the newly added elemnt 
      setTodo(finalTodo);                                 // set the state with newly added element

    }else{
      alert('Already Exist');
    }




    e.preventDefault();                                  // prevent the default behaviour of the form
  }

  let list = todo.map((value,index)=>{
    return <TodoListitem value={value} key={index}  idxNum={index} todo = {todo} 
    setTodo={setTodo}
    />                                                   //passing the props to the child component
  })

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveTodo}>
        <input type="text" name = 'toname' /> <button >Save</button>
      </form>
      <div className='outerdiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;




//idxNumber is sent as a prop to target particular element in the array and delete in future 

function TodoListitem({value,idxNum,todo,setTodo}){                            //destructuring the props // can be considered as a seperate component
  let [status,setStatus] = useState(false);                                    // set the status of the todo item
  let checkStatus=()=>{
    setStatus(!status)                                                         // toggle the status
  }
  let deleteRow=()=>{
    let finalData = todo.filter((v,i)=>i!==idxNum)                              // filter the data and remove the element with the index
    setTodo(finalData)                                                         // setting the new state 
  }
  return(
    <li className={(status)? 'completed' : ''} onClick={checkStatus}>  {idxNum+1}. {value} <span onClick={deleteRow}>&times;</span> </li>
  )
}
