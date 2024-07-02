function Btn() {
    const clickHandler = () => alert("fourth example");

    function guessNum() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        let userNum = prompt('type a number:');
        alert(`Computer number:v ${randomNum} User number: ${userNum}`);
    }

    function thirdExample() {
        alert('third example');
    };
    
    return(
        <div>
            <p><button onClick={function() {alert('first example')}}>
                 An inline anonymous ES5 function event handler
             </button></p>
       
            <p><button onClick={() => alert('second example')}>
                An inline anonymous ES6 function event handler
            </button></p>
        
            <p><button onClick={thirdExample}>
                using a separate function declaration
            </button></p>
       
            <p><button onClick={clickHandler}>
             using a separate function expression
            </button></p>
       
            <p><button onClick={guessNum}>
                Guess a number between 1 and 3
                </button></p>
        </div>
    )
}

export default Btn;