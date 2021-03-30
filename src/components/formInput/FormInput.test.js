import React from 'react';
import { render } from '@testing-library/react';
import FormInput from './FormInput';

describe('FormInput component', () => {
  it('renders input element 1', () => {
    // getter from react Testing Library(from '@testing-library/react)
    // insted : div.querySelector('.app')
    const { getByPlaceholderText } = render(<FormInput id="wwu" placeholder="name" />);
    expect(getByPlaceholderText(/name/i)).toBeInTheDocument();
  });
  it('rerenders input element 2', () => {
    const text = 'congregation';
    const { getByPlaceholderText, rerender } = render(<FormInput id="wwu1" placeholder={text} />);
    expect(getByPlaceholderText(text)).toBeInTheDocument();

    rerender(<FormInput id="wwu2" />);
    // defaultProps for placeholder
    expect(getByPlaceholderText('placeholder !')).toBeInTheDocument();
  });
});
