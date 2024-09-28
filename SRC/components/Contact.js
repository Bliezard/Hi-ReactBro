const Contact = () =>{
    return(
        <div >
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
        {/* <h2>This is Namaste React Contact Us Page</h2> */}
         <form>
            <input type ="text" className="border border-black p-2 m-2" placeholder="name"></input>
            <input type ="text" className="border border-black p-2 m-2" placeholder="message"></input>
            <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg"
            onClick={()=>{
                window.alert("Thanks for contacting us !");
            }}
            > 
                
            Submit</button>
        </form> 

        </div>
    );
};




export default Contact;

