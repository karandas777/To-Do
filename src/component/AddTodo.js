import React, { Component } from 'react'
import Logo from './Logo'

export default class AddTodo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            content:""
        }
    }

    funHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    funHandleSubmit=(e)=>{
        this.props.funAddTodo(this.state.content);
        this.setState({content:""})
    }
    

    render() {
        return (
            <div>
                <Logo/>
                <textarea className="form-control my-3" rows="10" name="content" value={this.state.content} onChange={this.funHandleChange}></textarea>
                <button className="btn btn-danger w-100" data-dismiss="modal" onClick={this.funHandleSubmit} >Add</button>
            </div>
        )
    }
}
