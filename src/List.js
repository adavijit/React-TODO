import React, {Component} from "react";
export default class List extends Component {
state={
    isBoxVisible:false
}
toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };


    render() {
        const { isBoxVisible } = this.state;
        return(
                <ul id="myUL">
                    {this.props.todos.map((todo, index) => (
                        <li onClick={this.toggleBox} className={isBoxVisible ? "checked" : ""} key={index}>{todo}</li>
                    ))}
                    
                </ul>
           
        )
    }
}