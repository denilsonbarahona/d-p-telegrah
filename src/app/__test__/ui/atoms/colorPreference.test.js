import React from "react";
import {faker} from "@faker-js/faker";
import {render, fireEvent} from "@testing-library/react";
import Preference from "@/app/ui/atoms/colorPreference";


describe("Preference", ()=>{
    const fnProp = jest.fn();
    let container;
    beforeEach(()=>{
       container = render(<Preference text="dark" src={faker.image.imageUrl()} onClick={fnProp} selected />);
    });

    it("rendering without crashing", ()=>{
       const {queryByRole} = container; 
       expect(queryByRole("button")).toBeInTheDocument();
    });

    it("making click to button", ()=>{
        const {queryByRole} = container;
        const button = queryByRole("button");
        fireEvent.click(button);
        expect(fnProp).toBeCalled();
    });

    it("getting selected class", ()=>{
        const itemByClassName = container.container.getElementsByClassName("selected")[0];
        expect(itemByClassName).toBeInTheDocument();
    });
});
