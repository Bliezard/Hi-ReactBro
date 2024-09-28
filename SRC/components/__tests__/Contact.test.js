import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { Input } from "postcss";

describe("Contact Us Page Test cases", ()=>{

    test("should load contact us page successfully", () => {

        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    });
    
    test("should load button inside Contact  component", () => {
    
        render(<Contact />);
    
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    
    });
    
    test("should load button inside Contact  component", () => {
    
        render(<Contact />);
    
        const inputText = screen.getByPlaceholderText("name");
        expect(inputText).toBeInTheDocument();
    
    });
    
    test("should load 2 input boxes on the  Contact  component", () => {
    
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes);
    
    });
});



