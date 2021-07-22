import React, { Component } from 'react';
import Newslist from '../components/Newslist';
import JSON from '../components/db.json';
import Footer from '../component footer/Footer';

class Home extends Component{
    constructor(){
        super();
        console.log("home constructor");
        this.state={
            "title":"React title state",
            news:JSON
        }
    }
    render(){
        console.log(this.state.title)
        console.log(this.state.news)
    
        return(
        <div><h1>this is from class based component</h1>
        <Newslist datalist={this.state.news}/>
        
      <Footer/>
        </div>
        
        )
    }

}
export default Home;


/*const Home=()=>{
        return(
            <h2> this is home component</h2>
        )
}*/
