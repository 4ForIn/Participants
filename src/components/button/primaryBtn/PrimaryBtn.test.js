import React from 'react';
import { render } from '@testing-library/react';
import PrimaryBtn from './PrimaryBtn';

describe('PrimaryBtn component', () => {
  it('renders children text', () => {
    const { getByText } = render(
      <PrimaryBtn>
        <>Submit</>
      </PrimaryBtn>,
    );
    getByText('Submit');
  });
  it('renders button node', () => {
    const { getByTestId } = render(
      <PrimaryBtn>
        <>Submit</>
      </PrimaryBtn>,
    );
    expect(getByTestId('primaryBtn')).toBeInTheDocument();
  });
});
