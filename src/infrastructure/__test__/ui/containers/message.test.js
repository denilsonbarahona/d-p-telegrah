import React from "react";
import { render } from "@testing-library/react";
import Message from "../../../ui/containers/message";

describe("Message", () => {
  it("rendering without crashing", () => {
    const { getByRole } = render(
      <Message
        name="tester"
        image="https://picsum.photos/id/237/200/300"
        message="lorem ipsum"
      />
    );
    expect(getByRole("article")).toBeInTheDocument();
  });

  it("rendering lorem ipsum in article", () => {
    const { getByText } = render(
      <Message
        name="tester"
        image="https://picsum.photos/id/237/200/300"
        message="lorem ipsum"
      />
    );
    expect(getByText("lorem ipsum")).toBeInTheDocument();
  });

  it("displaying sender name", () => {
    const { getByText } = render(
      <Message
        name="tester"
        image="https://picsum.photos/id/237/200/300"
        message="lorem ipsum"
      />
    );
    expect(getByText("tester")).toBeInTheDocument();
  });
});
