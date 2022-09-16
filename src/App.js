import './App.css';
import { useState } from 'react'

function App() {

  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  const [disabled, setDisabled] = useState('flase')
  // const [buttonColor, setButtonColor] = useState('red')
  // const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  return (
    <div className="App">
      <button
        disabled={disabled}
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}>
        change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-btn-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)} />
    </div>


  );
}

export default App;
