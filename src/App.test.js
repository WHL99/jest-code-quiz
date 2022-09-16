import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />)
  const colorBtn = screen.getByRole('button', { name: /change to blue/i })
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' })


  //click btn
  fireEvent.click(colorBtn)

  //expect bg to be blue
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' })
  // expect(colorBtn.textContent).toBe(/change to red/i) <-x
  expect(colorBtn.textContent).toBe('change to red');
})

test('initial consitions', () => {
  render(<App />)

  //check the button starts out enabled
  const colorBtn = screen.getByRole('button', { name: /change to blue/i })
  expect(colorBtn).toBeEnabled()

  //check the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})
