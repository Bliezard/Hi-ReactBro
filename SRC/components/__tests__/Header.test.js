import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



it ("it should render  Header component with a login button", ()=>{
    
    //Render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //Query
    const loginButton = screen.getByRole("button", {name:"Login"});

    expect(loginButton).toBeInTheDocument();
});

it ("it should change Login button to Logout on click", ()=>{
    
    //Render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //Query
    const loginButton = screen.getByRole("button", {name:"Login"});

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
});

it ("it should render  Header component with Cart item 0", ()=>{
    
    //Render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //Query
    const cartItems = screen.getByText(/Cart /);

    expect(cartItems).toBeInTheDocument();
});