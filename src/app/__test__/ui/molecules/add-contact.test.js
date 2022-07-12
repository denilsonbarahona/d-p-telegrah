import React from "react";
import AddContact from "@molecules/addContact";
import reactDom from "react-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { OpenModalMock, CloseModalMock } from "@/app/__mocks__/atoms/Modal";
import ProviderMock from "@/app/__mocks__/redux/providerMock";

describe("AddContact", () => {
  beforeAll(() => {
    reactDom.createPortal = jest.fn((element) => {
      return element;
    });
  });

  afterAll(() => {
    reactDom.createPortal.mockClear();
  });

  it("rendering without crashing", () => {
    const { queryByRole } = render(
      <ProviderMock>
        <AddContact />
      </ProviderMock>
    );
    const button = queryByRole("button", {
      name: "click to add new contact",
    });
    expect(button).toBeInTheDocument();
  });

  it("should open dialog when button is clicked", async() => {
    render(
      <ProviderMock>
        <AddContact />
      </ProviderMock>
    );
    /**
     * mocking the dialog component to show the dialog.
     */
    const showModal = jest.fn(OpenModalMock);
    HTMLDialogElement.prototype.showModal = showModal;
    const button = screen.queryByRole("button", {
      name: "click to add new contact",
    });
    fireEvent.click(button);

    expect(showModal).toHaveBeenCalled();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  describe("testing when form is open", () => {
    let closeModal;
    beforeAll(() => {
      render(
        <ProviderMock>
          <AddContact />
        </ProviderMock>
      );
      /**
       * mocking the dialog component to show and close the dialog.
       */
      const showModal = jest.fn(OpenModalMock);
      closeModal = jest.fn(CloseModalMock);
      HTMLDialogElement.prototype.showModal = showModal;
      HTMLDialogElement.prototype.close = closeModal;
    });

    it("should close dialog when close button is clicked", () => {
      /**
       * getting button and firing click event to open the dialog.
       */
      const button = screen.queryByRole("button", {
        name: "click to add new contact",
      });
      fireEvent.click(button);

      const closeButton = screen.getByRole("button", { name: "close modal" });
      fireEvent.click(closeButton);
      expect(closeModal).toHaveBeenCalled();
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
