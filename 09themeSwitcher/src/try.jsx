import React, { createContext, useContext } from 'react';

// Create a context with a default value
const MyContext = createContext('Default Value');

const ParentComponent = () => {
  return (
    <ChildComponent />
  );
};

const ChildComponent = () => {
  // Access the context value using useContext
  const value = useContext(MyContext);

  return <div>Context Value: {value}</div>;
};

const App_Comp = () => {
  return (
    <MyContext.Provider value='some value'>
        {/*// here the passed value will be printed because there is a context provider above this component. */}
        <ParentComponent/>
    </MyContext.Provider>
    // <MyContext.Provider value='some value'>
    //     {/*// here the passed value will be printed because there is a context provider above this component. */}
    //     <ChildComponent/> 
    // </MyContext.Provider>
    // <ChildComponent /> // here default value will be used hence there is no context provider above this component.
  );
};

export default App_Comp;
