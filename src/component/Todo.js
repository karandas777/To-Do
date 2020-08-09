import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        const {todo,index,funSetComplete,funDeleteTodo} = this.props;

        if (todo.complete === true){
            return (
                <div className="p-2 rounded bg-light shadow-sm mb-3 todo rounded-pill">
                   <div className="h4 mb-0 mt-1 completed">
                       <i className="fa fa-fw fa-check-square text-warning mr-2" onClick={()=>{funSetComplete(index)}} ></i>
                       {todo.title}
                       <i className="fa fa-fw fa-times float-right text-danger mr-2" onClick={()=>{funDeleteTodo(todo)}} ></i>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="p-2 rounded bg-light shadow-sm mb-3 todo rounded-pill">
                   <div className="h4 text-dark mb-0 mt-1">
                       <i className="fa fa-fw fa-square-o mr-2" onClick={()=>{funSetComplete(index)}} ></i>
                       {todo.title}
                       <i className="fa fa-fw fa-times float-right text-danger mr-2" onClick={()=>{funDeleteTodo(todo)}} ></i>
                    </div>
                </div>
            )
        }
        
    }
}
