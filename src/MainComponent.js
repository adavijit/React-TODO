import React from 'react';
import AddField from './AddField';
import List from "./List";


 class MainComponent extends React.Component{

    state = {
        todos: []
    }
    
    addTodo = newTodo => {
        this.setState({todos: [...this.state.todos, newTodo]})
    }
  
  render () {
    return (
   
      
        <div>
        
        <AddField addTodo={this.addTodo}/>
        <List todos={this.state.todos} />
        
        </div>
           
    );
  }
}

export default MainComponent;
