import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ExampleComponent;
/*

We're creating a simple component ExampleComponent that displays a count and a button.
We use the useState hook to declare a state variable count and a function setCount to update it.
We use the useEffect hook to perform side effects in function components. In this case, we want to update the document title every time the count state changes.
Since we didn't provide a second argument to useEffect, it runs after every render.
Inside the useEffect, we update the document title to reflect the current count.
When the button is clicked, it increments the count state, causing a re-render and triggering the effect to update the document title.

*/