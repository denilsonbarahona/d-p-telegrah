import React from "react";
import { render } from "@testing-library/react";
import { ContextProvider } from "@context/Context";
import Main from "@pages/main";
import RouterMock from "../../../__mocks__/routes/routeMock";
import ProviderMock from "../../../__mocks__/redux/providerMock";


describe("main pages", ()=>{
    it("rendering without crashing", ()=>{
        const { container } = render(
            <ContextProvider>
                <ProviderMock>
                    <RouterMock>
                        <Main />
                    </RouterMock>
                </ProviderMock>
            </ContextProvider>);
        expect(container).toMatchSnapshot();
    });
});


