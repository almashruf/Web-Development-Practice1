import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <div>
        <h2>Todo List</h2>
        {todos.length > 0 ? (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        ) : (
          <p>No todos available</p>
        )}
      </div>
    );
  }
}

class App extends Component {
  state = {
    todos: [
      { id: 1, text: 'Learn React' },
      { id: 2, text: 'Build a project' },
      { id: 3, text: 'Deploy to production' }
    ]
  };

  render() {
    return (
      <div>
        <h1>My Todo App</h1>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;



/*
We have a TodoList component that receives a prop called todos, which is an array of todo items.
Inside the render method of TodoList, we use conditional rendering to check if there are any todos available. If the todos array is not empty, we render a <ul> element with a list of todos using the map function. Each todo item is rendered as a <li> element, with a unique key assigned to it to help React efficiently update the list when changes occur.
If there are no todos available, we render a simple message saying "No todos available".
In the App component, we have a state containing an array of todos. We pass this array as a prop to the TodoList component.
The App component renders the TodoList component along with a heading.
This example demonstrates how to use conditional rendering, render lists, and apply keys in a React application.


*/