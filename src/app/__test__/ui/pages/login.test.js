import React from "react";
import { render } from "@testing-library/react";
import Login from "@pages/login";

describe("Login", ()=>{
    it("rendering without crashing", ()=>{
        const {queryByRole} = render(<Login />);
        expect(queryByRole("heading", {level: 1})).toBeInTheDocument();
    });
});

