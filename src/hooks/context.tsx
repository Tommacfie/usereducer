import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type MyContextType = {
  myState: number;
  setMyState: Dispatch<SetStateAction<number>>;
};

const MyContext = createContext<MyContextType>({
  myState: 0,
  setMyState: () => {},
});

export const MyContextProvider = ({
  children,
}: {
  children: ReactElement[];
}) => {
  const [myState, setMyState] = useState(0);
  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
