import React, {Component} from "react";
export default class List extends Component {


    render() {
        return(

            <div>
                <ul id="myUL">
                    {this.props.todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        )
    }
}