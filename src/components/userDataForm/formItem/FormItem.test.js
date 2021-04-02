import React from 'react';
import { render } from '@testing-library/react';
import FormItem from './FormItem';

describe('FormItem component', () => {
  const placeholderText = 'Name';
  const id1 = 'id1';
  const id2 = 'Zoom name';
  it('renders label', () => {
    const { getByText } = render(<FormItem id={id2} placeholder={placeholderText} label={id2} />);
    const labelTxt = getByText('Zoom name:');
    expect(labelTxt).toBeInTheDocument();
  });
  it('renders label 2', () => {
    const { container } = render(<FormItem id={id1} placeholder={placeholderText} label={id1} />);
    expect(container).not.toHaveTextContent('Zoom name:');
  });
});

/*
(container).not.toHaveTextContent from jest DOM

describe('FormItem component', () => {
  const placeholderText = 'Name';
  const id1 = 'id1';
  const id2 = 'Zoom name';
  it('renders label', () => {
    const { getByText } = render(<FormItem id={id2} placeholder={placeholderText} label={id2} />);
    const labelTxt = getByText('Zoom name:');
    expect(labelTxt).toBeInTheDocument();
  });
  it('renders label 2', () => {
    const { container } = render(<FormItem id={id1} placeholder={placeholderText} label={id1} />);
    expect(container).not.toHaveTextContent('Zoom name:');
  });
});

*/
