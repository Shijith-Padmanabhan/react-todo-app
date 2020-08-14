import React from 'react'



class TodoItem extends React.Component{


    componentWillReceiveProps(){
        console.log('recieved props biiiitch')
    }
    render(){
        
    const completedStyle = {
        fontStyle : 'italic',
        color : '#cdcdcd',
        textDecoration : 'line-through'
    }
        return (
            <div className='todo-item'>
                <input 
                type = "checkbox" 
                onChange={() => this.props.handleChange(this.props.item.id)} 
                checked={this.props.item.completed}   />
                <p style = {this.props.item.completed ? completedStyle : null}>{this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem