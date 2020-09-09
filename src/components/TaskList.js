import React, { Component } from 'react'
import TaskItem from './TaskItem';

export class TaskList extends Component {

    constructor(props){
        super(props)
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }


    onFilter = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value      
        })
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
    }


    render() {

        const {tasks} = this.props;
        const {filterName} = this.state;
        const elmTasks = tasks.map((task, index) => {
            return <TaskItem key={task.id} 
            index = {index} task = { task } 
            onUpdate = {this.props.onUpdate} 
            onDelete = {this.props.onDelete} 
            onUpdateStatus ={ this.props.onUpdateStatus }
            taskEditing = { this.props.taskEditing}
            />
        })
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control" name="filterName" id="" aria-describedby="helpId" placeholder="" 
                                    value = { filterName }
                                    onChange = {this.onFilter}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="form-group">
                                <select onChange = {this.onFilter} className="form-control" name="filterStatus" id="">
                                    <option value={-1}>All</option>
                                    <option value={1}>Active</option>
                                    <option value={0}>Passive</option>
                                    
                                </select>
                                </div>
                            </td>
                            <td>@mdo</td>
                        </tr>
                        {elmTasks}
                        
                    </tbody>
                    </table>
            </div>
        )
    }
}

export default TaskList
