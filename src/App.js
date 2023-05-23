import './App.css';
import ColorBlock from './ColorBlock';
import ColorForm from './colorForm';
import React, { useState } from 'react';

const DEFAULT_COLOR = [ "green", "yellow", "orange", "red", "pink","violet", "purple", "blue"];

function App() {
  const [colors, setColors] = useState(DEFAULT_COLOR)

  const onAddColor = (newColor) => setColors ([...colors, newColor])

  const colorMap = colors.map ( 
    ( color, index ) => <ColorBlock key = {index} color = {color} />
    );

  return (
    <div className="App">
      {colorMap}
      < ColorForm onAddColor = {onAddColor}/>
    </div>
  );
}

export default App;
