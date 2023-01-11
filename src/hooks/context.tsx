import React, {
  createContext,
  ReactElement,
  useContext,
  useReducer,
} from 'react';
import {
  StateType,
  IncreaseActionType,
  DecreaseActionType,
  AddToArray,
  RemoveFromArray,
  myReducer,
} from './reducer';

export type MyContextType = {
  state: StateType;
  dispatch: React.Dispatch<
    IncreaseActionType | DecreaseActionType | AddToArray | RemoveFromArray
  >;
};

const initialState = {
  number: 0,
  array: [],
};

const MyContext = createContext<MyContextType>({
  state: {
    number: 0,
    array: [],
  },
  dispatch: () => {},
});

export const MyContextProvider = ({
  children,
}: {
  children: ReactElement[];
}) => {
  const [state, dispatch] = useReducer(myReducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
