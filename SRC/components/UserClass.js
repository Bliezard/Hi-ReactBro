import React from "react";

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        
        this.state = {
            userInfo : {
                name : "dummy",
                location : "default",
                avatar_url : "https://dummy-photo.com"
            },
        };
        // console.log(this.props.name +"child  constructor");
    }

    async componentDidMount (){
        console.log(this.props.name +"child  component did Mount");  
        //API call
        const data = await fetch ("https://api.github.com/users/Bliezard");
        const json = await data.json();
        

        this.setState({
            userInfo : json,
        });

        // console.log(json);

        
    }
    componentDidUpdate(){
        // console.log("component Did Update");
    }
    componentWillUnmount(){
        // console.log("component Will Unmount");  
    }

    render(){
        console.log( this.props.name + " child render");
        // const {name, location}=this.props;

        const {name, login,location,avatar_url}=this.state.userInfo;
        // debugger;

        return (
        
        <div className="user-card">
            <img src ={avatar_url } />
            <h2>Name : {name}</h2>
            <h3>Login ID :{login}</h3>
            <h3>Location :{location}</h3>
            <h4>Contact : kajaly379@gmail.com</h4>
            
            </div>
            );  
    }
}


export default UserClass;

/********
 * ----------------------MOUNTING CYCLE
 *Constructor (dummy)
 *Render (dummy)
 *     <HTML dummy>
 *Component Did Mount 
 *      <API call>
 *      <This.setState1> -> stae variable is updated
 * 
 * ----------------------------UPDATE
 *      render (API data)
 *      <HTML new api Data>
 *      Component Did Update
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */