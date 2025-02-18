import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChanges = event => {
        this.setState({
            [event.target.task]: event.target.value
        });
    };

    submitTask = event => {
        event.preventDefault()
        this.props.addTask(this.state.task);
    };

    render() {
        return(
            <form onSubmit={this.submitTask}>
                <input
                type="text"
                value={this.state.task}
                name="task"
                onChange={this.handleChanges}
                
            />
            <button>Add Task!</button>
            </form>
        )
    }
}

