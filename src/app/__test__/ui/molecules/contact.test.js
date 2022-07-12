import React from "react";
import { render } from "@testing-library/react";
import Contact from "@molecules/contact";
import { ContextProvider } from "@context/Context";
import ProviderMock from "@/app/__mocks__/redux/providerMock";

describe("Contact", () => {
  it("render without crashing", () => {
    const { getByText } = render(
      <ContextProvider>
        <ProviderMock>
          <Contact
            contactId="testId1"
            name="tester"
            src="https://picsum.photos/id/237/200/300"
            paragraph="testing"
          />
        </ProviderMock>
      </ContextProvider>
    );
    expect(getByText("tester")).toBeInTheDocument();
  });

  it("not rendering notifications", () => {
    const { queryByRole } = render(
      <ContextProvider>
          <ProviderMock>
            <Contact
              contactId="testId1"
              name="tester"
              src="https://picsum.photos/id/237/200/300"
              paragraph="testing"
            />
          </ProviderMock>
      </ContextProvider>
    );
    expect(queryByRole("alert")).not.toBeInTheDocument();
  });

  it("rendering children", () => {
    const { queryByText } = render(
      <ContextProvider>
        <ProviderMock>
          <Contact
            contactId="testId1"
            name="tester" 
            src="https://picsum.photos/id/237/200/300"
            paragraph="testing"
          >
            <div>Testing</div>
          </Contact>
        </ProviderMock>
      </ContextProvider>
    );

    expect(queryByText("Testing")).toBeInTheDocument();
  });
});
