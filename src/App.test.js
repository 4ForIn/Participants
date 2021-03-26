/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { act, render, screen } from '@testing-library/react';
import App from './App';
/*
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
*/
describe('Main App component', () => {
  test('testing func', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    const appDivClass = div.querySelector('.app');
    // console.log(appDivClass.innerHTML);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders wrapping div', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app-wrapping-div')).toBeInTheDocument();
  });
});
