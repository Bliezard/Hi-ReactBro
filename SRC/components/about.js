
import UserContext from "../utils/UserContext";
import  User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props)
    {
         super(props);
    }
    componentDidMount ()
    {
       
    }
    render()
    { 
         return (
            <div>
            <h1>About</h1>
            <div>
                Logged In User
                 <UserContext.Consumer>
                    {({loggedInUser})=><h1 className="text-lg font-bold">{loggedInUser}</h1>}
                 </UserContext.Consumer>
            </div>
            <h2>This is Namaste React web series</h2>
             <UserClass name ={ "First (class)"} location={"Lucknow"} />
          </div>
        );
    }
}

export default About;