import React, { Component } from 'react'

export class Addwork extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: "",
            name: "",
            status: true
        }
    }

    // componentWillMount() {
    //     if(this.props.taskEditing){
    //         this.setState({
    //             id: this.props.taskEditing.id,
    //             name: this.props.taskEditing.name,
    //             status: this.props.taskEditing.status
    //         } 
    //         )
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        if(this.props.taskEditing !== null){
            this.setState((prevState,nextProps) => ({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status
            }),()=>{console.log(this.state)});
        }
    }

    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(value === "true" || value === "false"){
            value = JSON.parse(value);
        }
        this.setState({
            [name]:value
        })
    }




    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onData(this.state)
    }



    render() {
        let { id } = this.state
        console.log(id)
        return (
                <div className="card ">
                    <div className="card-header">
                        <div className="row d-flex align-items-center">
                        <h3 className="col">{"Add Work"}</h3>
                            
                            <span className="col fa fa-times-circle d-flex justify-content-end">
                            </span>
                        </div>
                        
                    </div>
                    <ul className="list-group list-group-flush p-2" >
                        <form onSubmit ={this.handleSubmit}>
                            <div className="form-group">
                            <label>Name:</label>
                            <input type="text"
                                className="form-control" name="name" onChange={this.handleChange}  aria-describedby="helpId" 
                            />
                            </div>
                        

                            <div className="form-group">
                            <label>Status</label>
                            <select className="form-control" name="status" onChange={this.handleChange}>
                                <option value={true} >Active</option>
                                <option value={false} >Passive</option>
                            </select>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" name=""  className="btn btn-success mr-1"><i className="fas fa-plus"></i> Add</button>
                                <button type="reset" name=""  className="btn btn-danger"><i className="fas fa-times"></i> Cancel</button>
                            </div>

                        </form>
                    </ul>

                </div>
        )
    }
}

export default Addwork
