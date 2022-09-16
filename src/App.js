import './App.css';
import { useState } from 'react'


export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {

  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'
  const [disabled, setDisabled] = useState('flase')

  return (
    <div className="App">
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}>
        change to {replaceCamelWithSpaces(newButtonColor)}
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
