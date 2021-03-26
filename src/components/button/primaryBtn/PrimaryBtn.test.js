/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { queries, render } from '@testing-library/react';
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
