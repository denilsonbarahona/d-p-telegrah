import React from "react";
import {render} from "@testing-library/react";
import reactDom from "react-dom";
import Modal from "@/app/ui/atoms/modal";

describe("testing modal", ()=>{
    beforeAll(() => {
        reactDom.createPortal = jest.fn((element) => {
            return element;
        });
    });

    afterAll(() => {
       reactDom.createPortal.mockClear();
    });
    
    it("rendering without crashing", ()=>{
        const modal = render(<Modal><button type="button">Test</button></Modal>);
        expect(modal).toMatchSnapshot();
    });
});
