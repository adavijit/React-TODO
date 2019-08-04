import React , {Component} from 'react';
import './App.css';
class AddField extends Component{
state = {
    text: ""
}
 handleAdd = async e =>{
    await this.setState({[e.target.name]: e.target.value});
    console.log(this.state.text);
}

handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
}

render(){
    return(
        <div id="myDIV" className="header">
        <h2>TO DO</h2>
        <input type="text" id="myInput" name="text" placeholder="Title..." value={this.state.text} onChange={this.handleAdd}/>
        <span onClick={this.handleSubmit} class="addBtn">Add</span>

        </div>
    );
}
}
export default AddField;