import React from "react";
import { render } from "@testing-library/react";
import Header from "@molecules/header";
import { ContextProvider } from "@context/Context";
import ProviderMock from "@/app/__mocks__/redux/providerMock";

describe("Header", ()=>{
    it("rendering without crashing", ()=>{
        const {queryByRole} = render(
            <ContextProvider>
                <ProviderMock>
                    <Header 
                        name="tester"
                        image="https://picsum.photos/id/237/200/300" />
                </ProviderMock>
            </ContextProvider>
        );

        expect(queryByRole("heading", {level: 2})).toBeInTheDocument();
    });
});
