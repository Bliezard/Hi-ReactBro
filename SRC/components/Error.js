import { useRouteError } from "react-router-dom";

const Error = ()=>{

    const Err = useRouteError();
    console.log(Err);
    return (
        <div >
            <h1>Oops something went wrong !! &#x1F622;</h1>
            <h2>{Err.status}: {Err.statusText}</h2>
        </div>
    );
};

export default Error;