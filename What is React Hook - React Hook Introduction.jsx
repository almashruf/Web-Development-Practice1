/*
Hooks are functions that let you "hook into" React state and lifecycle features from functional components. They allow you to reuse stateful logic across components, making it easier to manage complex component logic.

The most commonly used Hooks are useState, useEffect, useContext, and useReducer. Here's a brief overview of each:

useState: Allows functional components to have local state. It returns a stateful value and a function to update it, similar to this.setState in class components.

useEffect: Allows performing side effects in functional components. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

useContext: Allows accessing a context object created by React.createContext. It enables passing data through the component tree without having to pass props down manually at every level.

useReducer: A more powerful alternative to useState. It is useful for managing more complex state logic in components.

Using Hooks can make your code more readable, concise, and easier to maintain, especially for components that are primarily concerned with managing state and effects. They also encourage the use of functional programming patterns and make it easier to share logic between components.
*/

import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" and a function to update it named "setCount"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* onClick event handler to increment the count */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;


/*

In this example:

We import useState from React.
Inside the Counter functional component, we call useState(0) to declare a state variable named count and a function named setCount to update it. The argument passed to useState (0 in this case) is the initial value of the state variable.
We render the current value of count inside a paragraph tag.
We render a button that, when clicked, calls setCount to increment the count state variable by 1.
Whenever setCount is called, React will re-render the component with the updated value of count. This allows the component to react to changes in its state and re-render accordingly.

This is just a simple example, but it demonstrates how Hooks allow you to use state in functional components without needing to use class components.

*/