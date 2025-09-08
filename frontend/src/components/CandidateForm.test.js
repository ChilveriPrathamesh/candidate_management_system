import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CandidateForm from "./CandidateForm";

// Mock fetch API 

global.fetch = jest.fn(() => 
    Promise.resolve({
        json : () => Promise.resolve({id : 1 , name : "John Doe" , email : "john@example.com" , phone_number : "1234567890" , current_status : "Active" , resume_link : "http://resume.com/john"})
    }))

describe("CandidateForm Component" , () => {
    beforeEach(() => {
        fetch.mockClear(); // clear previous mocks
    })
})

test("renders input fields for name and email", () => {
  render(<CandidateForm />);

  // Check for Name field
  expect(screen.getByPlaceholderText("Enter full name")).toBeInTheDocument();

  // Check for Email field
  expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();

  // Check for Phone Number field
  expect(screen.getByPlaceholderText("Enter phone number")).toBeInTheDocument();

    // Check for Current Status field
    expect(screen.getByPlaceholderText("Enter current status")).toBeInTheDocument();

    // Check for Resume URL field
    expect(screen.getByPlaceholderText("Enter resume URL")).toBeInTheDocument();

    // Check for Submit button
    expect(screen.getByRole("button", { name: /Add Candidate/i })).toBeInTheDocument();
});

test("updates state when input fields change" , () =>{
    render(<CandidateForm />);

    const nameInput = screen.getByPlaceholderText("Enter full name");
    fireEvent.change(nameInput , {target : {value : "John Doe"}}) ;
    expect(nameInput.value).toBe("John Doe");

    const emailInput = screen.getByPlaceholderText("Enter email");
    fireEvent.change(emailInput , {target : {value : "john@example.com"}}) ;
    expect(emailInput.value).toBe("john@example.com")
})


test("submits form and calls API" , async () => {
    render(<CandidateForm />);

    // Fill form 

    fireEvent.change(screen.getByPlaceholderText("Enter full Name") , {target : {value : "John Doe"}}) ;
    fireEvent.change(screen.getByPlaceholderText("Enter email",{target : {value : "john@example.com"}}));
    fireEvent.change(screen.getByPlaceholderText("Enter phone number") , {target : {value : "1234567890"}})
    fireEvent.change(screen.getByPlaceholderText("Enter current status") , {target : {value : "Active"}}) ;
    fireEvent.change(screen.getByPlaceholderText("Enter resume URL") , {target : {value : "http://example.com/resume.pdf"}}) ;

    // Submit form 

    fireEvent.click(screen.getByText("Add Candidate")) ;

    // wait for fetch to be called 

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1)) ;

    //Check fetch called with correct data 
    expect(fetch).toHaveBeenCalledWith("http://localhost:5000/api/candidates" , {
        method : "POST" , 
        headers : {"Content-Type" : "application/json"} , 
        body : JSON.stringify({
            name : "John Doe" , 
            email : "john@example.com" , 
            phone_number : "1234567890" ,
            current_status : "Active" ,
            resume_link : "http://resume.com/john"
        })
    })
})