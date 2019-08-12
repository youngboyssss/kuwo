import React,{Component} from "react";
import axios from "axios"
import  "./../../assets/css/Rank/Rank.css";
import Rank2 from"./Rank2";
import {
    NavLink,
    Link,
    withRouter,
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from "react-router-dom"
 class Rank extends Component{
    constructor(props){
         super(props);
         this.state={
             data:[]
         }
    }
 
    render(){
          console.log(33333,this.state.data);
        return (
             
            <Router forceRefresh={true}>
            <div className="Rankmain">
                
                {
                    this.state.data.map((v,i)=>{
                             
                       return(
                           <>
                        <NavLink exact key={i} to={"/Rank2/"+i}>
                        
                        <div >
                            <span className="left"><img src={v.pic}/></span>
        
                            <span className="middle">
                                <span>
                                    <h4>{v.rankName}</h4>
                                   { v.songs.map((y,i)=>{
                                       return(
                                        <span key={i}><i className="left_i">{(i+1)+"."}</i>{y.songName}<i className="right_i">-{y.songer}</i></span>
                                       )
                                   })}
                                   
                                
                                </span>
                            </span>
                            <span className="right">></span>
                        </div>
                        </NavLink>
                        <Route path={"/Rank2/:id"} component={
                             Rank2
                        }></Route>
                        </>
                       )


                    })
             
                

                    }
                
                </div>

                </Router>
            
        )
        
    }

    getconsole() {
        axios.get("http://127.0.0.1:90/Rank1").then((data)=>{
            console.log(11111,data.data.data);
            console.log(111,this);
            /*this.setState({
                data:data
            });*/
          this.setState({
              data:data.data.data
          });
    
    })
    console.log(this.state.data);
}
componentDidMount(){
    this.getconsole();
}
}
export default withRouter(Rank);