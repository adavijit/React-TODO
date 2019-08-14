import React, { Component } from "react";
export default class List extends Component {
	state = {
		isBoxVisible: false
	};

	toggleBox = id => {
		this.props.toggleChecked(id);
	};

	render() {
		return (
			<ul id="myUL">
				{this.props.todos.map((todo, index) => (
					<li
						onClick={() => this.toggleBox(todo.id)}
						className={todo.checked ? "checked" : ""}
						key={index}
					>
						{todo.description}
					</li>
				))}
			</ul>
		);
	}
}
