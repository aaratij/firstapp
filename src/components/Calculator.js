import {
    useState,
    useRef
  } from "react"; 
  import "../assets/stylesheets/Calculator.css";
  
  function App() { 
    const inputRef = useRef(null); 
    
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0);
   
   
    function plus(e) { 
      e.preventDefault(); 
      //setResult((result) => result + Number(inputRef.current.value));
      //setResult((result) => Number(inputRef.current.value) + Number(inputRef2.current.value));
      setResult((result) => result + Number(inputRef.current.value));
    }; 
   
    function minus(e) { 
        e.preventDefault(); 
        // Add the code for the minus function 
        //setResult((result) => Number(inputRef.current.value) - Number(inputRef2.current.value));
        setResult((result) => result - Number(inputRef.current.value));
    };
   
    function times(e) { 
        e.preventDefault(); 
        // Add the code for the minus function 
        //setResult((result) => Number(inputRef.current.value) * Number(inputRef2.current.value));
        setResult((result) => result * Number(inputRef.current.value));
    }; 
   
    function divide(e) { 
      // Add the code for the divide function 
      e.preventDefault(); 
      // Add the code for the minus function 
     
      let divisor = Number(inputRef.current.value);
      if (divisor === 0) {
        setResult((result) => "Division by 0 not possible");
      } else {
        //setResult((result) => Number(inputRef.current.value) / Number(inputRef2.current.value));
        setResult((result) => result / Number(inputRef.current.value));
      }
    };
   
    function resetInput(e) { 
      // Add the code for the resetInput function 
      inputRef.current.value = "Type a number";
     
    }

    function resetResult(e) { 
        // Add the code for the resetResult function 
        setResult(0);
    }; 
   
    return ( 
      <div className="App"> 
        <div> 
          <h1>Simplest Working Calculator</h1> 
        </div> 
        <form> 
          <p ref={resultRef}> 
           {result}
          </p> 
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
           
          <button onClick={plus}>add</button> 
          <button onClick={minus}>subtract</button> 
          <button onClick={times}>multiply</button> 
          <button onClick={divide}>divide</button> 
          <button onclick={resetInput}>Reset Input</button>
          <button onclick={resetResult}>Reset Result</button>
          {/* Add the subtract button */} 
          {/* Add the multiply button */} 
          {/* Add the divide button */} 
          {/* Add the resetInput button */} 
          {/* Add the resetResult button */} 
        </form> 
      </div> 
    ); 
  } 
   
  export default App; 
  