import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home'
import WelcomeMSG from './welcomeMSG/WelcomeMSG';
import WelcomeDescription from './welcomeMSG/WelcomeDescription';
import ClickCounter from './ClickCounter/ClickCounter';
import ClickCounterDescription from './ClickCounter/ClickCounterDescription';
import ToggleText from './ShowText/ToggleText';
import ShowTextDesc from './ShowText/ShowTextDesc';
import ToDoList from './To-Do-List/ToDoList';
import ToDoDescription from './To-Do-List/ToDoDescription';
import ColorBox from './ColorBox/ColorBox';
import DescriptionColorBox from './ColorBox/DescriptionColorBox';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import CountdownDescription from './CountdownTimer/CountdownDescription';


function App() {
  return (
    <div className="App">
      <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/components/WelcomeMSG" element={<WelcomeMSG />} />    
                    <Route path="/components/WelcomeDescription" element={<WelcomeDescription />} />
                    <Route path="/components/ClickCounter" element={<ClickCounter />} />
                    <Route path="/components/ClickCounterDescription" element={<ClickCounterDescription/>} />
                    <Route path="/components/ToggleText" element={<ToggleText />} />
                    <Route path="/components/ToggleTextDesc" element={<ShowTextDesc />} />
                    <Route path="/components/ToDoList" element={<ToDoList />} />
                    <Route path="/components/ToDoDescription" element={<ToDoDescription />} />
                    <Route path="/components/ColorBox" element={<ColorBox />} />
                    <Route path="/components/DescriptionColorBox" element={<DescriptionColorBox />} />
                    <Route path="/components/CountdownTimer" element={<CountdownTimer />} />
                    <Route path="/components/CountdownDescription" element={<CountdownDescription />} />
                </Routes>
        </Router>
    </div>
  );
}

export default App;
