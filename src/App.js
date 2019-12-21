import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        tittle: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        tittle: "Take a walk",
        completed: false
      },
      {
        id: 3,
        tittle: "Dinner with Farah",
        completed: false
      },
    ]
  }


  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />

      </div>
    );
  }
}





export default App;
