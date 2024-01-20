
import './App.css';

function App() {

  return (
    <div className="App">
     {/* <Build prop={<Wrapperafun/>} /> */}
     <Build> Hi there </Build>
    </div>
  );  
}
// function Wrapperafun (){
//   return <div>hello bro</div>
// }
function Build({children}){
  console.log(children)
  return <div style={{border : '2px solid'}}>
    {children}
  </div>
}



export default App;
