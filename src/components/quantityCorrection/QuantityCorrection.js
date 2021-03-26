import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button/primaryBtn';

export default function QuantityCorrection({number, handleBtn}) {
  const [inputValue, setInputValue] = useState(0)
  return (
    <>
      <div className="is-flex is-align-items-center is-align-self-center is-flex-wrap-nowrap">
        <div>
          <p className="mr-3">
            All participants:<span className="ml-1"><strong className=" has-text-link"> {number}</strong></span>
          </p>
        </div>
        <div><p>If it is incorrect type here the correct number: </p></div>
        <div className="mr-2">          
          <input
            className="input is-primary is-small mx-1"
            type="number"            
            placeholder="type correct number"
            value= {inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>        
      </div>
      <div className="is-flex is-align-self-center mt-2">
        <Button btnType="button" handleOnClick={handleBtn}>
          <>Send to the secretary
          <span className="ml-1"><strong className=" has-text-link"> {inputValue || number}</strong></span>
          </>
        </Button>
      </div>
    </>
  );
}

QuantityCorrection.propTypes = {
  number: PropTypes.number,
  handleBtn: PropTypes.func,
};
  
QuantityCorrection.defaultProps = {
  number: 0,
  // eslint-disable-next-line no-console
  handleBtn: () => {console.log('AddParticipantsForm expect onClick');}
};

