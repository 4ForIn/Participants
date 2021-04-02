import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuantityCorrection from './QuantityCorrection';

describe('QuantityCorrection component', () => {
  const placeholderText = 'type correct number';
  it('renders input placeholder', () => {
    const { getByPlaceholderText, rerender } = render(<QuantityCorrection />);
    const input = getByPlaceholderText(placeholderText);
    expect(input).toBeInTheDocument();
    rerender(<QuantityCorrection />);
    expect(input).toBeInTheDocument();
  });
  it('renders p element', () => {
    const { getByTestId } = render(<QuantityCorrection />);
    expect(getByTestId('p')).toBeInTheDocument();
  });
  it('displays input value', () => {
    // input type="number"
    const value1 = 4;
    const { getByPlaceholderText, rerender } = render(<QuantityCorrection />);
    const input = getByPlaceholderText(placeholderText);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: value1 } });
    expect(input).toHaveValue(value1);

    // // input type="number" recives string
    rerender(<QuantityCorrection />);
    fireEvent.change(input, { target: { value: 'value1' } });
    expect(input).toHaveValue(null);
  });
  it('displays proper input value', () => {
    // input type="number"
  });
});

/* , fireEvent

fireEvent.change(input, { target: { value: value1 } });
handleInput(event) => {event.target.value}

imitating change event, thats create object with target object, which contains value field.
*/
