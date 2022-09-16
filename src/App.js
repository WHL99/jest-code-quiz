import './App.css';
import { useState } from 'react'

function App() {

  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  const [disabled, setDisabled] = useState('flase')

  return (
    <div className="App">
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}>
        change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-btn-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)} />
      <label htmlFor="disable-btn-checkbox">disable button</label>

    </div>


  );
}

export default App;
