import React from 'react';
import './App.css';
import {Ratting} from "./components/Ratting";
import {Accordion} from "./components/Accordion";


function App() {
  return (
    <div>
      This is APP component
        <Ratting/>
        <Accordion/>
    </div>
  );
}

export default App;
