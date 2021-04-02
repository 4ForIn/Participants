import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormInput from './FormInput';

// setup function:

const renderFormInput = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderUtils = render(<FormInput id="id-11" placeholder="Name" {...props} />);
  const input = renderUtils.getByPlaceholderText(/name/i);
  return { ...renderUtils, input };
};

describe('FormInput component', () => {
  it('renders input placeholder', () => {
    const { input, rerender, getByPlaceholderText } = renderFormInput();
    expect(input).toBeInTheDocument();

    rerender(<FormInput id="id-11" />);
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
    const { input } = renderFormInput({ value: value1 });
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: value1 } });
    expect(input).toHaveValue(value1);
  });
});

/* 
getByPlaceholderText, getByLabelText - getters from react Testing Library(from '@testing-library/react). Insted : div.querySelector('.app').

----------------------
describe('FormInput component', () => {
  const text = 'Name';
  it('renders input placeholder', () => {
    const { getByPlaceholderText, rerender } = render(<FormInput id="wwu" placeholder={text} />);
    expect(getByPlaceholderText(/name/i)).toBeInTheDocument();
    rerender(<FormInput id="wwu2" />);
    // defaultProp for placeholder
    expect(getByPlaceholderText('placeholder !')).toBeInTheDocument();
  });

*/
