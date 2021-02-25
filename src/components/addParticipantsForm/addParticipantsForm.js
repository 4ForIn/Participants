import React from 'react';
import Button from 'components/button/primaryBtn';

export default function AddParticipantsForm() {
  return (
    <>
      <div className="is-flex is-align-items-center is-align-self-center is-flex-wrap-nowrap">
        <div>
          <p className="mr-3">
            All meeting participants:<span className="ml-1">4</span>
          </p>
        </div>
        <div className="mr-2">
          <input
            className="input is-primary is-small mr-1"
            type="number"
            placeholder="Add participants"
          />
        </div>
        <div>
          <Button btnType="button">
            <>Add</>
          </Button>
        </div>
      </div>
      <div className="is-flex is-align-self-center mt-2">
        <Button btnType="button">
          <>Send to the secretary</>
        </Button>
      </div>
    </>
  );
}
