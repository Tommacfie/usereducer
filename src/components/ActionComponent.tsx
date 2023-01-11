import React from 'react';
import { useMyContext } from '../hooks/context';

const ActionComponent = () => {
  const { myState, setMyState } = useMyContext();
  return (
    <>
      <button
        onClick={() => {
          setMyState((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setMyState((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
      <div>Value: {myState}</div>
    </>
  );
};

export default ActionComponent;
