import react from "react";
import Cards from './Cards';
import SBox from './sBox';
import './main.css';
class XD extends react.Component {
    constructor(){
        super()
        this.state={
            usersf:[],
            searchF:''
        }
    }
    componentDidMount = () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response=>{
            return Response.json()
        })
        .then(users=> this.setState({usersf:users}));
    }
    sBDC = (e) =>{
        this.setState({searchF:e.target.value})

   }
    render(){
        const fUser = this.state.usersf.filter(user =>{
            return user.name.toLowerCase().includes(this.state.searchF.toLowerCase());
        })
        if(this.state.usersf.length===0){
            return(
                <h1>Loading...</h1>
            );
        }
        else{
        return(
            <div className="tot">
              <h1>My first React App</h1>
              <SBox sBDC={this.sBDC} />
              <Cards Rovo={fUser}/>
            </div>
        );
        }
    }
}

export default XD;