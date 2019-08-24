import React from "react";
import AddField from "./AddField";
import List from "./List";
//MainComponent
class MainComponent extends React.Component {
	state = {
		todos: []
	};

	addTodo = newTodo => {
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	toggleChecked = id => {
		let newTodos = this.state.todos.map(todo =>
			todo.id === id ? { ...todo, checked: !todo.checked } : todo
		);
		this.setState({ todos: newTodos });
	};

	render() {
		return (
			<div>
				<AddField addTodo={this.addTodo} />
				<List
					todos={this.state.todos}
					toggleChecked={this.toggleChecked}
				/>
			</div>
		);
	}
}

export default MainComponent;
