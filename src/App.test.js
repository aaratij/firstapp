/* import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Sidebar from './components/Sidebar.js'

import Trunk from './examples/Trunk.js'
import Example from './examples/Example.js';

import "./assets/avatar.png";
import Card from "./examples/Card.js"

import Btn from "./components/Btn.js"
import ModeToggler from './components/ModeToggler.js';
import InputComponent from './components/InputComponent.js';
import RegisterForm from './components/RegisterForm.js';

import Fruits from "./components/Fruits.js";
import FruitsCounter from './components/FruitsCounter.js';

function Logo (props) {
    const userPic = <img src={avatar}/>
    return userPic;
}

function App() {
  const [word, setWord] = React.useState('Set');
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'pineapple', id: 2},
    {fruitName: 'plum', id: 3},
    {fruitName: 'mango', id: 4}
  ]);
  return (
    <div>
    <p><Btn/> </p>
    <p><ModeToggler/></p>

    <br/>

    <p><InputComponent/></p>


    <p><RegisterForm/></p>
    
  
  
  
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruitsList={ fruits }/>
      <FruitsCounter fruitsList={fruits}/>
    </div>
  
    </div>
  )
}

function App5 () {
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

export default App; */
