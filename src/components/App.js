
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let[click,setClick] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {click} times</p>
        <button onClick={setClick(click+1)}>Click me</button>

    </div>
  )
}

export default App
