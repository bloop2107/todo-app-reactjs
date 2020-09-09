import React, { Component } from 'react'

export class Addbutton extends Component {  

    constructor(props){
        super(props)
        this.state = {
            hide: true,
        }
    }
    
    showTaskList = (params) => {
        this.setState((prevState) => ({
            hide: !prevState.hide
        }))
        params = this.state.hide
        this.props.onHide(params)
    }

    render() {
        return (
            <div>
                <button onClick={this.showTaskList} type="button" name=""  className="btn btn-primary"><i className="fas fa-plus"></i> Add Work</button>
            </div>
        )
    }
}

export default Addbutton
