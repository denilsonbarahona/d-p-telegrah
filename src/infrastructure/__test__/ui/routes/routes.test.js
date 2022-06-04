import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import reactDom from "react-dom";
import RoutesApp from "../../../ui/routes/route";

describe("Routes", () => {
  beforeAll(() => {
    reactDom.createPortal = jest.fn((element) => element);
  });

  beforeEach(() => {
    render(<RoutesApp />);
  });

  afterAll(() => {
    reactDom.createPortal.mockClear();
  });

  it("testing rendering index", () => {
    /** if we are in the / we have to see the search element */
    expect(screen.getByRole("search")).toBeInTheDocument();
  });

  it("testing rendering /call", async () => {
    /** if we are in the /call we have to see a heading with the text recent calls */
    const user = userEvent.setup();
    const link = screen.queryByRole("link", { name: "go to /call" });
    await user.click(link);
    expect(
      screen.getByRole("heading", { level: 2, name: /Recent Calls/i })
    ).toBeInTheDocument();
    expect(screen.queryByRole("search")).not.toBeInTheDocument();
  });

  it("testing rendering /message", async () => {
    /** if we are in the /message we have to see the search form  */
    const user = userEvent.setup();
    const link = screen.queryByRole("link", { name: "go to /message" });
    await user.click(link);
    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { level: 2, name: /Recent Calls/i })
    ).not.toBeInTheDocument();
  });

  it("rendering /config", async () => {
    /** if we are in the /config we have to see the heading asking for our favorite theme */
    const user = userEvent.setup();
    const link = screen.queryByRole("link", { name: "go to /config" });
    await user.click(link);
    expect(
      screen.queryByRole("heading", {
        level: 2,
        name: /Which theme do you like the most?/i,
      })
    ).toBeInTheDocument();
    expect(screen.queryByRole("search")).not.toBeInTheDocument();
  });
});
