// State update ----------> this.setState()

import React, {Component} from "react";

interface Test
{
    nm: string,
    ag: number,
    loc: string,
    dp: string,
    em: string
}

class Stateex extends Component
{
    state:Test={nm:"john",ag:30,loc:"America",dp:"computer",em:"johndoe@gmail.com"};

    valupd=()=>{
        this.setState({ag:40,dp:"history",loc:"canada"});
    }

    render(){
        return(
            <>
            <ol className="list-group">
                <li className="list-group-item">Name: {this.state.nm}</li>
                <li className="list-group-item">Age: {this.state.ag}</li>
                <li className="list-group-item">Location: {this.state.loc}</li>
                <li className="list-group-item">Department: {this.state.dp}</li>
                <li className="list-group-item">Email: {this.state.em}</li>
            </ol>
            <br />
            <button onClick={this.valupd}>UPDATE</button>
            </>
        )
    }
}
export default Stateex;