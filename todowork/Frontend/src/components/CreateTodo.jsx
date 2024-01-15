import {useState} from 'react'

export function CreateTodo() {
  const [title, setTitle] = useState("")
  const [description, setDescription]= useState("")
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
      
    >
      <input style={{ margin: "30px" }}
       type="text" 
       placeholder="title"
       onChange={function(e) {
        setTitle(e.target.value)
      }} />
      <input style={{ margin: "30px" }} 
      type="text" 
      placeholder="description"
      onChange={function(e) {
        setDescription(e.target.value)
      }} />
      <button style={{ margin: "30px", padding: "10px" }} onClick={()=>{
        fetch("http://localhost:5000/info", {
          method :"POST",
          body: JSON.stringify({
            title: title,
            description: description
          }),
          headers:{
            "content-type" :"application/json"
          }
        }) 
        .then(async function(res){
          const json = await res.json();
          alert("todo added")
        })
      }}>
         click 
      </button>
    </div>
  );
}
