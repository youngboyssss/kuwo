import React,{Component} from "react";
import  "./../../assets/css/Rank/Rank2.css"
import './../../assets/css/Rank/font1/iconfont.css'
import axios from 'axios'
import {
    NavLink,
    Link,
    withRouter,
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from "react-router-dom"


 class Rank2 extends Component{
    constructor(props){
        super(props);
        this.audioPic='';
        this.audio="";
       this.state={
           data:{},
           audio:'',
           audioPic:'',
           style:{}
       }
        
    }
    getdata(){
         console.log(555511111111155,this.props.location.pathname)
         console.log(55555,"http://127.0.0.1:90"+this.props.location.pathname)
        axios.get("http://127.0.0.1:90"+this.props.location.pathname).then((data)=>{
            console.log(11111,data.data.data);
            console.log(111,this);
            /*this.setState({
                data:data
            });*/
          this.setState({
              data:data.data.data,
              
          });
          console.log(333333,this.state.data.songs);
          

    
    })
        
      
    
    }
    getAudio(pic,audio){
     this.setState({
         audio:audio,
         audioPic:pic,
         style:{display:"flex"}
     })
     console.log("******************************************************************************************");
     
    }
    
    componentWillMount(){
       this.state.data.songs=[{}];
       this.state.data.pic='';
    }
    componentDidMount(){
        console.log(123214324324324,this);
        this.getdata();
        
    }
    render(){
           console.log(2223334,this.state.data.songs);
           console.log(23423412431,this.state.data.pic);

        return (

            <Router forceRefresh={true}>
             <div className="Rank2main">
               
                 <div className="top">
                    <div className="map"> 
                        <NavLink to="/"><div className="iconfont">&#xe618;
</div></NavLink>
                        <div className="map_content">
                            
                           
                        
                        </div>
                    </div>
                    <img className="img" src={this.state.data.pic}/>
                 </div>
                 <div className="body">
                   <div className="ul">
                    
                   {
                       this.state.data.songs.map((v,i)=>{
                           console.log(334444444433,this);
                          return(<div className="li" onClick={this.getAudio.bind(this,v.pic,v.audioUrl)} key={i}><span className="left"><h4>{v.songName}</h4><h5>{v.songer}</h5></span><span className="right"><i className="iconfont_left"></i><i className="iconfont_right"></i></span></div>)
                       })
                   }
                       
                    
                   
                   
                   
                
                   
                   
        
                        
                   
                 </div>
                       
        
                 </div>
                 <div className="footer" style={this.state.style}>
                     <span style={{background:(this.state.audioPic)}}></span>

                     <audio src={this.state.audio} controls={"controls"}></audio>
                 </div>
               
             </div>
        </Router>



        )
    }
}
export default withRouter(Rank2);
