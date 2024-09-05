
import  User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props)
    {

        super(props);
        // console.log("Parent constructor");

    }
    componentDidMount (){
        // console.log("Parent  component did Mount");  
    }
    render()
    { 
        // console.log(" Parent render");
        return (
            <div>
            <h1>About</h1>
            <h2>This is Namaste React web series</h2>
            {/* <User name ={ "Kajal Yadav (function)"}/> */}

            <UserClass name ={ "First (class)"} location={"Lucknow"} />
            {/* <UserClass name ={ "Secound (class)"} location={"Lucknow"} /> */}
        </div>

        );
    }

}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React web series</h2>
//             {/* <User name ={ "Kajal Yadav (function)"}/> */}

//             <UserClass name ={ "Kajal Yadav (class)"} location={"Lucknow"} />
//         </div>
//     );
// };

export default About;