// React state array of object handling
// array handling with map()
// conditional rendering concept in react

import React, {Component} from "react";

interface Test{
    nm:string,
    dp:string,
    loc:string
}

export default class Register extends Component
{
    state:{info:Test,data:Test[]}={info:{nm:"",dp:"",loc:""},data:[]}

    valupd=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let{name,value}=e.target;
        this.setState({info:{...this.state.info,[name]:value}})
    }

    addinfo=()=>{
        this.setState({data:[...this.state.data,this.state.info],info:{nm:"",dp:"",loc:""}})
    }

    render(){
        return(
            <>
            Enter name:
            <input type="text" name="nm" onChange={this.valupd} value={this.state.info.nm} />
            <br />
            Enter Department:
            <input type="text" name="dp" onChange={this.valupd} value={this.state.info.dp} />
            <br />
            Enter Location:
            <input type="text" name="loc" onChange={this.valupd} value={this.state.info.loc} />
            <br />
            <button onClick={this.addinfo}>ADD</button>
            {
                (this.state.data.length>0)?<ol>
                    {
                        this.state.data.map((v,index)=>{
                            return <li>Name: {v.nm} Dept: {v.dp} Location: {v.loc}</li>
                        })
                    }
                </ol>:<h3>No information added yet .....!</h3>
            }
            </>
        )
    }
}