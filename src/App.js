import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const thingsToDo = [
  {
  task: 'wash the car',
  id: Date.now(),
  completed: false
  },
  {
    task: 'practice javascript',
    id: Date.now(),
    completed: false
  },
  {
    task: 'hit the gym',
    id: Date.now(),
    completed: false 
  }
]; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      thingsToDo
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          toDos={thingsToDo} 
          />
        <TodoForm addTask={this.addTask}/>
        {console.log(thingsToDo)}
      </div>
    );
  }
}

export default App;
