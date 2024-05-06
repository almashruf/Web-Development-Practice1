# Web-Development-Practice1


React-
—--------------
#5 React JSX Element & Rendering Elements 


React jsx and react element discussion
Jsx to virtual dom in react-

JSX stands for "JavaScript XML." It's a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. JSX makes it easier to write and understand the structure of user interfaces, especially when working with React, a popular JavaScript library for building user interfaces.

In the above code, <h1>Hello, world!</h1> looks like HTML, but it's actually JSX. When the code is compiled, JSX is transformed into regular JavaScript function calls. For example, the above JSX code would be transformed into:
javascript
Copy code
const element = React.createElement('h1', null, 'Hello, world!');

This transformation is typically done using tools like Babel, which converts JSX syntax into regular JavaScript so that browsers can understand it.
JSX allows developers to write code that closely resembles the final output, making it easier to visualize and maintain complex user interfaces.



Interpolation in JSX refers to the ability to embed JavaScript expressions within JSX code. This allows developers to dynamically insert values, variables, or expressions into JSX elements or attributes.
Here's an example of interpolation in JSX:
jsx
Copy code
const name = "John";
const element = <h1>Hello, {name}</h1>;


Think react  element as javascript object..


Our code (react element) ,  convert as javascript object where they define

As types and property.

React works for creating element

Element is immutable so we make changes from ‘stateful components’


#6 React Components and Props Core Concept


React components return return element
We can provide different skills or property in a component as object

import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;


Components - 
Functional(less code)
class(more code)

#7 React State & Lifecycle in Class Component 
State and life cycle

