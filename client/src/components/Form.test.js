import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from './Form';

test("renders correctly", () => {
    render(<Form />)
});

test("form adds new player correctly", () => {
    const { getByLabelText, getByText } = render(<Form />);

    //query for the form inputs
    const nameInput = getByLabelText(/name/i);
    const ageInput = getByLabelText(/age/i);
    const notesInput = getByLabelText(/notes/i);

    //fireEvent function from react testing library to fill in the inputs
    //change becuase onChange is used in AF app
    fireEvent.change(nameInput, { target: { name: 'name', value: 'John Smith' } });
    fireEvent.change(ageInput, { target: { name: 'age', value: '28' } });
    fireEvent.change(notesInput, { target: { name: 'notes', value: 'Really old, but very sweet' } });

    //query for submit button
    const submitButton = getByText(/submit!/i);
    // clicking the button 
    fireEvent.click(submitButton);
    //assertion
    getByText(/john smith/i);
    
});