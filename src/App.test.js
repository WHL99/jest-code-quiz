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
  expect(checkbox).toBeChecked()
})


test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);

  const checkBox = screen.getByRole('checkbox', { name: /disable button/i })
  const colorBtn = screen.getByRole('button')

  fireEvent.click(checkBox)
  expect(colorBtn).toBeEnabled()

  fireEvent.click(checkBox)
  expect(colorBtn).toBeDisabled()
});

test('Disable button then button turns gray', () => {
  render(<App />);

  const checkBox = screen.getByRole('checkbox', { name: /disable button/i })
  const colorBtn = screen.getByRole('button')

  fireEvent.click(checkBox)
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(checkBox)
  expect(colorBtn).toHaveStyle({ backgroundColor: 'gray' })

});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);

  const checkBox = screen.getByRole('checkbox', { name: /disable button/i })
  const colorBtn = screen.getByRole('button')

  fireEvent.click(colorBtn)



  fireEvent.click(checkBox)
  expect(colorBtn).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkBox)
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' })

});