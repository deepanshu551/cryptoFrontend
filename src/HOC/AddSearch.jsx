import React from 'react';

import {TextField} from "@material-ui/core";
const WrapperComponent=(OldComponent)=>{


    class UpdatedComponent extends React.Component{
        constructor(props){

            super(props);
            this.state={
                searchTerm:""
            }
        }

        handleSearch=(e)=>{
this.setState({searchTerm:e.target.value})
        }

        render(){

            return (<div>

                <TextField onChange={e=>this.handleSearch(e)} label="search your favorit crypto here... "/>
                <OldComponent searchTerm={this.state.searchTerm}/>
            </div>)
        }
    }
    return UpdatedComponent;
}

export default WrapperComponent;