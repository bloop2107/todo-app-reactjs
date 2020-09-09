import React, { Component } from 'react'

export class TaskItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "this.props.task.name"
        }
    }
    

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id)
    }


    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        })
        
    }

    inUpdate = (e) => {
        e.preventDefault();
        this.props.onUpdate(this.props.task.id,this.state.name)
        console.log(this.state)
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id)
        this.props.task.name = <form>
                                    <input 
                                        type="text"
                                        className="form-control" name="name" aria-describedby="helpId" placeholder="" 
                                        
                                        onChange = {this.handleChange}
                                    />
                                    <input onClick={this.inUpdate} type="submit" hidden />
                                </form>
    }


    render() {

        const {task, index} = this.props;
        return (
            
            <tr>
                <th scope="row">{index + 1}</th>

                    <td>{this.props.task.name}</td>
                    <td>
                        <div className="d-flex justify-content-lg-center align-items-center">
                        <span onClick = {this.onUpdateStatus} 
                            className={task.status === true ? "badge badge-success text-center mx-auto" : "badge badge-danger text-center mx-auto"  }>{task.status === true ? "Active" : "Passive"}</span>
                        </div>
                    </td>
                    <td>
                        <button onClick = {this.onUpdate}type="button" className="btn btn-success mr-1"><i className="fas fa-marker"></i> Edit</button>
                        <button onClick = {this.onDelete} type="button" className="btn btn-danger"><i className="fa fa-trash-alt"></i> Delete</button>
                    </td>
            </tr>
        )
    }
}

export default TaskItem
