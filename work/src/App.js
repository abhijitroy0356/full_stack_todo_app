import {useState} from "react"
import { useEffect } from "react";
import axios from "axios"
function App() {
  const [selectedid, setselectedid] = useState([])
  
  // useEffect(()=>{
  //   axios.get(`http://oc${todo}`)
  //   .then(function (res){
  //     setTodos(res.data.todos)
  //   })
  // },[])
  return (
    <>
    <button onClick={function(){
      setselectedid(1)
    }}>1</button>
    <button onClick={function(){
      setselectedid(2)
    }}>2</button>
   <button onClick={function(){
      setselectedid(3)
    }}>3</button>
    <button onClick={function(){
      setselectedid(4)
    }}>4</button>
    <Todoref id={selectedid}/>
      {/* {todos.map (todo => <Todo key={todo.id} title ={todo.title} description= {todo.description}/>)} */}
    </>
  );
}
function Todoref({id}){
  const [idref, setIdref]= useState({})
  useEffect(()=>{
    setTimeout(()=>{axios.get(`http://oc${idref}`)
    .then(function (res){
      setIdref(res.data.todos)})
    },5000)
  },[id])

}

function Todo ({id,title ,description}){
  return <div>
    <h1>{title}</h1>
    <h1>{description}</h1>
    <h1>{id}</h1>
  </div>
}
export default App;
