import React, { Component } from 'react'

class Lifecycle extends Component{
    constructor(){
        super()
        this.state={
            title:'Lifecycle'
        }
    }
    componentWillMount(){
        console.log("before created")
    }
    componentDidMount(){
        console.log("After created")
    }
    render(){
        return(
            <div>
                <h1>Check console log for execution</h1>
                <h1>{this.state.title}</h1>
                <div className="btn" onClick={()=>{
                    this.setState({title:"Something happened"})
                }
                }>Click

                </div>
            </div>
        )
    }
    componentWillUpdate(){
        console.log("Component will update")
    }
    componentDidUpdate(){
        console.log("Component did update")
    }
}
export default Lifecycle;