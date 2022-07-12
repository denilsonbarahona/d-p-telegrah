import React from "react";
import { render } from "@testing-library/react";
import Google from "@atoms/google";

describe("Google login button", ()=>{
    it("renders", ()=>{
        const { queryByRole } = render(<Google />);
        const button = queryByRole("button");
        expect(button).toBeInTheDocument();
    });
});

