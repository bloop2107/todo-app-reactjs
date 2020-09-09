import React, { Component } from 'react'
import Sort from './Sort'
import Search from './Search'
import Addbutton from './Addbutton'

export class Control extends Component {

    

    render() {
        return (
            <div>
                <Addbutton 
                    onHide = {this.props.onHide} 
                />
                <div className="row mt-2 mr-2 d-flex align-items-center">
                    <form className="col-8 ">
                        <Search onSearch = {this.props.onSearch} />
                    </form>
                    <form className="col-2 ">
                        <Sort onSort = { this.props.onSort}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Control
