import './App.css';
import { useState } from 'react'

function App() {

  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}>
        change to {newButtonColor}
      </button>
      <input type="checkbox"></input>
    </div>
  );
}

export default App;
