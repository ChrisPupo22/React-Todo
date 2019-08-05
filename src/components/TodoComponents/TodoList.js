import React from 'react';
import Todo from './Todo';




// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.toDos)
    }
    render() {
        return(
            <div>
                {this.props.toDos.map(item => {
                    console.log(item.task)
                    return <Todo task={item.task} />
                })}
            </div>
        ) 
    }
}