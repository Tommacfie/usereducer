import React, {
  createContext,
  ReactElement,
  useContext,
  useReducer,
} from 'react';

export type MyContextType = {
  state: number;
  dispatch: React.Dispatch<ActionEnum>;
};

export enum ActionEnum {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

const MyContext = createContext<MyContextType>({
  state: 0,
  dispatch: () => {},
});

export const MyContextProvider = ({
  children,
}: {
  children: ReactElement[];
}) => {
  const myReducer = (state: number, action: ActionEnum) => {
    let newState;
    switch (action) {
      case ActionEnum.INCREASE:
        newState = state + 1;
        break;
      case ActionEnum.DECREASE:
        newState = state - 1;
        break;
      default:
        newState = state;
    }
    return newState;
  };

  const [state, dispatch] = useReducer(myReducer, 0);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
