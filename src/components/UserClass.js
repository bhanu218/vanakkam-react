import React  from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        }
        componentDidMount(){
            console.log("UserClass component mounted");
        }
        componentDidUpdate(prevProps){
            console.log("UserClass component updated", prevProps, this.props);
        }
        componentWillUnmount(){
            console.log("UserClass component unmounted");
        }   
        render(){
            return(
                <div className="user-card">
                    <h2>Name:{this.props.name}</h2>
                    <h3>Location:{this.props.location}</h3>
                    <h4>Greetings: hey, Hi!</h4>
                </div>
            )
        }

}

export default UserClass;