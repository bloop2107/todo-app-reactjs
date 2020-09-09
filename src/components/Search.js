import React, { Component } from 'react'

export class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            keywords: ''
        }
    }

    onChange = (event) => {
        this.setState({
              keywords : event.target.value
        }, () => {console.log(this.state.keywords)})
    }

    onClick = () => {
        this.props.onSearch(this.state.keywords)
    }


    render() {
        
        return (
             <div className="input-group mb-3">
                    <input 
                        type="text" 
                        name="keywords"
                        className="form-control"  
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2" 
                        onChange = {this.onChange}
                        value = { this.state.keywords }
                    />
                    <div className="input-group-append mr-3">
                        <button onClick={this.onClick} type="button" name="" className="btn btn-primary"><i className="fas fa-search"></i> Search</button>
                    </div>
             </div>       
        )
    }
}

export default Search
