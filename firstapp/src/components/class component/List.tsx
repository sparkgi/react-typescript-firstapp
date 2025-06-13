// React state array of object handling
// array handling with map()
// conditional rendering concept in react

import React, {Component} from "react";

export default class List extends Component
{
    state:{nm:string,info:string[]}={nm:"",info:[]};

    addnm=()=>{
        if(this.state.nm==null || this.state.nm=="")
        {
            alert("Please Enter Name");
        }
        else
        {
            this.setState({info:[...this.state.info,this.state.nm],nm:""});
        }
        
    }
    delnm=(id:number)=>{
            this.state.info.splice(id,1);
            this.setState({info:this.state.info});
        }

    render(){
        return(
            <>
            Enter Name:
            <input type="text" name="nm" value={this.state.nm} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{this.setState({nm:e.target.value})}} />
            <br />
            <button onClick={this.addnm}>ADD</button>
            {
                (this.state.info.length>0)?<ol>
                    {
                        this.state.info.map((v,index)=>{
                            return <li>{v} <button onClick={()=>{this.delnm(index)}}>DELETE</button></li>
                        })
                    }
                </ol>:<h3>No name added yet...!</h3>
            }
            </>
        )
    }
}

