/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import rootReducer from 'reducers/rootreducer';
import { Provider } from 'react-redux';

export default function renderWithReduxState(ui, { initialState, ...renderOptions } = {}) {
  const store = createStore(rootReducer, initialState);
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

/*
export default function renderWithReduxState(
  ui,
  { initState, store = createStore(rootReducer, initState), ...renderOptions } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
describe('Header component', () => {
  it('render user name from initState', () => {
    const { container } = renderWithReduxState(<Header />, { initState: { user: initUser } });
    expect(container).toHaveTextContent(initUser.name);
  });
});
*/
