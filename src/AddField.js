import React , {Component} from 'react';
import './App.css';
class AddField extends Component{
state = {
    text : ''
}
 handleAdd = () =>{
    this.setState({
        text : document.getElementById('myInput').value
    });
    console.log(this.state.text);

}
render(){
    return(
        <div id="myDIV" className="header">
        <h2>TO DO</h2>
        <input type="text" id="myInput" placeholder="Title..."/>
        <span onClick={this.handleAdd} className="addBtn">Add</span>
        </div>
    );
}
}
export default AddField;