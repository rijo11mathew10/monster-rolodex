import { Component } from "react";

class SearchBox extends Component{
 
     render(){
         return(
            <input 
              className={this.props.className} 
              type="search" 
              placeholder="search monsters" 
              onChange={this.props.onChangeHandler}/>

         )
     }
}

export default SearchBox