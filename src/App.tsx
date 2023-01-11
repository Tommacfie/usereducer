import ActionComponent from './components/ActionComponent';
import { MyContextProvider } from './hooks/context';

const App = () => {
  return (
    <>
      <MyContextProvider>
        <div>Context</div>
        <ActionComponent />
      </MyContextProvider>
    </>
  );
};

export default App;
