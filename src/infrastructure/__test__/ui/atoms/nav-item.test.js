import React from "react";
import { render } from "@testing-library/react";
import NavItem from "@atoms/navItem";
import RouterMock from "../../../__mocks__/routes/routeMock";

describe("Nav item", () => {
  it("rendering without crashing", () => {
    const { queryByRole } = render(
      <RouterMock>
        <NavItem selected to="/">
          <span>test</span>
        </NavItem>
      </RouterMock>
    );
    const Link = queryByRole("link");
    expect(Link).toBeInTheDocument();
  });

  it("to match snapshot", () => {
    const { container } = render(
      <RouterMock>
        <NavItem selected to="/">
          <span>test</span>
        </NavItem>
      </RouterMock>
    );
    expect(container).toMatchSnapshot();
  });

  it("to have isSelected className", () => {
    const { container } = render(
      <RouterMock>
        <NavItem selected to="/">
          <span>test</span>
        </NavItem>
      </RouterMock>
    );
    expect(
      container.getElementsByClassName("isSelected")[0]
    ).toBeInTheDocument();
  });

  it("to not have a className", () => {
    const { container } = render(
      <RouterMock>
        <NavItem to="/">
          <span>test</span>
        </NavItem>
      </RouterMock>
    );
    expect(container.getElementsByClassName("isSelected").length).toBe(0);
  });
});