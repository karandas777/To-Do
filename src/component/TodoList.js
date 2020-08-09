import React, { Component } from 'react'
import Todo from './Todo'
import Logo from './Logo'
import AddTodo from './AddTodo';

export default class TodoList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             todos:[
                 {
                    title:"Shopping",
                    complete:true,
                 },
                 {
                    title:"Cooking",
                    complete:true,
                 },
                 {
                    title:"Cycling",
                    complete:false,
                 },
                 {
                    title:"Reading",
                    complete:false,
                 },
                 {
                    title:"Walking",
                    complete:true,
                 },
                 {
                    title:"killing",
                    complete:false,
                 },
                 {
                    title:"Shooting",
                    complete:false,
                 },
             ]
        }
    }
    
    funSetComplete=(i)=>{
        let newList = [...this.state.todos];
        newList[i].complete = !this.state.todos[i].complete;
        this.setState({todos:newList});
    }

    funAddTodo=(data)=>{
        let todo = {
            title:data,
            complete:false,
        }

        let newList = [...this.state.todos , todo];
        this.setState({todos:newList});
    }

    funDeleteTodo=(toRemove)=>{
        let newList = this.state.todos.filter((todo,i)=>{
            return todo !== toRemove;
        })
        this.setState({todos:newList});

    }

    render() {
        return (
            <div className="pt-3 pb-5 mb-3">
                <Logo/>

                <div className="py-1 mb-3 text-right">   
                        <button className="btn btn-danger shadow-sm rounded-pill" data-toggle="modal" data-target="#exampleModal">
                            <i className="fa fa-plus"></i> Add
                        </button>
                </div>

                {
                    this.state.todos.map((todo,i)=>(
                        <Todo todo={todo} key={i} index={i} funSetComplete={this.funSetComplete} funDeleteTodo={this.funDeleteTodo} />
                    ))
                }
                

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content border border-warning">
                        <div className="modal-body">
                            <AddTodo funAddTodo={this.funAddTodo} />
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
