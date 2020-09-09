import React, { Component } from 'react'

export class Sort extends Component {

    constructor(props){
        super(props)
        this.state = {
            sort: 0
        }
    }


    onFilter = (event) => {
        var target = event.target;
        var name = target.name;
        var value = +target.value;
        this.setState({
            [name] : value      
        })
        this.props.onSort(name === 'sort' ? value : this.state.sort);
    }
    


    render() {
        return (
            <div className="form-group">
              <label></label>
              <select onChange = {this.onFilter} className="form-control" name="sort">
                    <option value={0}>Time</option>
                    <option value={-1}>A-Z</option>
                    <option value={1}>Z-A</option>
                                    
              </select>
            </div>
        )
    }
}

export default Sort
