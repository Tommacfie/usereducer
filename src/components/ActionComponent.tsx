import React from 'react';
import { ActionEnum, useMyContext } from '../hooks/context';

const ActionComponent = () => {
  const { state, dispatch } = useMyContext();
  return (
    <>
      <button
        onClick={() => {
          dispatch(ActionEnum.INCREASE);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(ActionEnum.DECREASE);
        }}
      >
        Decrement
      </button>
      <div>Value: {state}</div>
    </>
  );
};

export default ActionComponent;
