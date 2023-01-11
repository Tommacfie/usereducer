import { ActionEnum, useMyContext } from '../hooks/context';

const ActionComponent = () => {
  const { state, dispatch } = useMyContext();
  return (
    <>
      <div>
        <div>Numbers</div>
        <button
          onClick={() => {
            dispatch({ type: ActionEnum.INCREASE });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: ActionEnum.DECREASE });
          }}
        >
          Decrement
        </button>
        <div>Value: {state.number}</div>
      </div>
      <div>
        <div>Arrays</div>
        <input
          type="text"
          onChange={(event) => {
            dispatch({
              type: ActionEnum.ADDTOARRAY,
              payload: event.target.value,
            });
          }}
        />
        <ul>
          {state.array.map((item, index) => {
            return (
              <div style={{ display: 'flex' }}>
                <li key={item}>{item}</li>
                <button
                  onClick={() => {
                    dispatch({
                      type: ActionEnum.REMOVEFROMARRAY,
                      payload: index,
                    });
                  }}
                >
                  Remove from list
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ActionComponent;
