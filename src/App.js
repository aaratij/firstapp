import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Sidebar from './components/Sidebar.js'

import Trunk from './examples/Trunk.js'
import Example from './examples/Example.js';

import avatar from "./avatar.png";
import Card from "./examples/Card.js"

function Logo (props) {
    const userPic = <img src={avatar}/>
    return userPic;
}

function App () {
  return (
    <div className="App">
        <h1>Task: Add three Card elements</h1>
        <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3" />
        <Card h2="Third card's h2" h3="Third card's h3" />
    </div>
  );
}


function App1() {
   return (
    <div>
        <Header name="AJ" color="purple"/>
        <Main greet="Howdy"/>
        <Sidebar greet="Hi" color="green"/>
        <Sidebar greet="Hey" color="orange"/>
    </div>
  );
}

function App2() {
  return (
    <div>
      <Trunk></Trunk>
    </div>
  );
}

function App3() {
  const bool = false;
  const str1 = "String ";
  return (
    <div className="App">
      <Example toggleBoolean={!bool} math={(10 + 20)/3} str={str1 + 'another ' + 'string'}/>
    </div>
  );
}

function App4 () {
  return (
    <div>
      <h1>Hello World</h1>
      <Logo/>
    </div>
  )
}

export default App;
