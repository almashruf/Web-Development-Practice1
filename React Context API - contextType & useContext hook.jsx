/*
Using the React Context API involves three main steps: creating a context, providing a context value, and consuming the context value. Here's how you can use the React Context API:

Create a Context: First, you need to create a context using the React.createContext() function. This function returns an object with Provider and Consumer components.
Provide a Context Value: Wrap the part of your component tree that needs access to the context with a Provider component. The Provider component accepts a value prop, which is the data you want to share with the components nested within it.
Consume the Context Value: Use the Consumer component or the useContext hook to access the context value within the nested components.
Here's a simple example:

jsx
*/

import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const ThemeContext = createContext();

// Step 2: Provide a Context Value
const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <h1>Theme Example</h1>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
};

// Step 3: Consume the Context Value
const Toolbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default App;


/*
We first create a context called ThemeContext using createContext().
We then use the Provider component to wrap the part of the component tree that needs access to the theme context. We provide a value prop containing the theme state and a function to toggle the theme.
In the Toolbar component, we use the useContext hook to consume the context value. We get access to the theme and setTheme function, which allows us to toggle the theme.
When the "Toggle Theme" button is clicked, the theme toggles between 'light' and 'dark', and the change is reflected in the Toolbar component.
This is a basic example of how to use the React Context API to share state between components in a React application.

*/



/*

contextType:
Define a Context: First, you need to create a Context using React.createContext().
Set contextType in the Component: In the class component where you want to consume the context, set the static property contextType to the Context you created.
Access the Context Value: Once contextType is set, you can access the context value using this.context within the component.

*/

import React, { createContext, Component } from 'react';

// Step 1: Create a Context
const MyContext = createContext();

class MyClassComponent extends Component {
  // Step 2: Set contextType
  static contextType = MyContext;

  render() {
    // Step 3: Access the context value
    const contextValue = this.context;
    return <div>{contextValue}</div>;
  }
}

// Usage
const App = () => (
  <MyContext.Provider value="Hello from Context">
    <MyClassComponent />
  </MyContext.Provider>
);

export default App;


/*

useContext Hook:
Define a Context: Same as above, create a Context using React.createContext().
Use useContext Hook: In a functional component, call the useContext() hook passing in the Context you want to consume.
Access the Context Value: useContext() hook returns the current context value, which you can use directly in your component.
Here's how you can use useContext hook:

*/

import React, { createContext, useContext } from 'react';

// Step 1: Create a Context
const MyContext = createContext();

// Usage
const MyClassComponent = () => {
  // Step 2 & 3: Use useContext hook
  const contextValue = useContext(MyContext);
  return <div>{contextValue}</div>;
};

// Usage
const App = () => (
  <MyContext.Provider value="Hello from Context">
    <MyClassComponent />
  </MyContext.Provider>
);

export default App;
