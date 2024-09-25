import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

// Component Data
const components = [
  { name: "Welcome message", descPath: "/components/WelcomeDescription", compPath: "/components/WelcomeMSG" },
  { name: "Click Counter", descPath: "/components/ClickCounterDescription", compPath: "/components/ClickCounter" },
  { name: "Show Text", descPath: "/components/ToggleTextDesc", compPath: "/components/ToggleText" },
  { name: "To-Do list", descPath: "/components/ToDoDescription", compPath: "/components/ToDoList" },
  { name: "Change color box", descPath: "/components/DescriptionColorBox", compPath: "/components/ColorBox" },
  { name: "Countdown timer", descPath: "/components/CountdownDescription", compPath: "/components/CountdownTimer" }
];

const Home = () => (
  <div className='My-CV'>
    <h1 className='logo'><span>Omar Monib</span></h1>
    <div className="home-container">
      <div className="component-list-container">
        <h1>Choose from this list of components:</h1>
        <ul className="component-list">
          {components.map(({ name, descPath, compPath }, index) => (
            <li key={index}>
              <label>{name}</label>
              <div className="button-group">
                {descPath !== "#" && (
                  <Link to={descPath}>
                    <button className="component-btn">Component Description</button>
                  </Link>
                )}
                <Link to={compPath}>
                  <button className="component-btn">Enter component</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <footer className="designer-signature">
          <p>Designed by Omar Monib © 2024</p>
        </footer>
      </div>
    </div>
  </div>
);

export default Home;
