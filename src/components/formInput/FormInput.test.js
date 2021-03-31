import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormInput from './FormInput';

describe('FormInput component', () => {
  const text = 'Name';
  it('renders input placeholder', () => {
    const { getByPlaceholderText, rerender } = render(<FormInput id="wwu" placeholder={text} />);
    expect(getByPlaceholderText(/name/i)).toBeInTheDocument();
    rerender(<FormInput id="wwu2" />);
    // defaultProp for placeholder
    expect(getByPlaceholderText('placeholder !')).toBeInTheDocument();
  });
  it('rerenders label text', () => {
    const { getByLabelText, rerender } = render(<FormInput id="wwu3" />);
    // defaultProp for labelText
    expect(getByLabelText('label !')).toBeInTheDocument();
    rerender(<FormInput id="wwu2" labelText="Name" />);
    expect(getByLabelText(/name/i)).toBeInTheDocument();
  });
  it('displays proper value', () => {
    const value1 = 'dummyValue';
    const { getByLabelText } = render(<FormInput id="wwu3" labelText="Name" value={value1} />);
    const input = getByLabelText(/name/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: value1 } });
    expect(getByLabelText(/name/i)).toHaveValue(value1);
  });
  it('displays proper value1', () => {});
});

/* 
getByPlaceholderText, getByLabelText - getters from react Testing Library(from '@testing-library/react). Insted : div.querySelector('.app').
------------------------

const text = 'Name';
  it('renders input placeholder', () => {
    const { getByPlaceholderText, rerender } = render(<FormInput id="wwu" placeholder={text} />);
    expect(getByPlaceholderText(/name/i)).toBeInTheDocument();
    rerender(<FormInput id="wwu2" />);
    // defaultProp for placeholder
    expect(getByPlaceholderText('placeholder !')).toBeInTheDocument();
  });


*/
