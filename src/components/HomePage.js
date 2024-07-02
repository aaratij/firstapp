import CurrentMessage from "./CurrentMessage";


import { useState, useRef } from "react";

function HomePage() {
    //let chk = true && 5;

    const [val, setVal] = useState('');
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        setVal(inputRef.current.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Enter a number between 1 and 7</label>
                <input ref={inputRef} />
                <button type="submit">Submit</button>
            </form>

            <CurrentMessage day={val}/>

        </div>
    )
}

export default HomePage;