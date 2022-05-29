import React from "react";
import { IoPersonAddOutline, IoCloseOutline } from "react-icons/io5";
import {
  AddContainer,
  ModalTitle,
  ModalTitleContainer,
  Form,
  Input,
  Button,
  CloseButton,
} from "@Style-components/add-contact.style";
import Modal from "@UI-components/modal";

const AddContact = () => {
  const showModalPlain = (event) => {
    event.stopPropagation();
    const $modal = document.querySelector("#dialog");
    if (typeof $modal.showModal === "function") $modal.showModal();
  };

  const hideModal = (event) => {
    event.stopPropagation();
    const $modal = document.querySelector("#dialog");
    if (typeof $modal.close === "function") $modal.close();
  };

  return (
    <>
      <AddContainer
        aria-label="click to add new contact"
        onClick={showModalPlain}
      >
        <IoPersonAddOutline />
        Add contact
      </AddContainer>
      <Modal>
        <ModalTitleContainer>
          <ModalTitle>Add a new contact</ModalTitle>
          <CloseButton
            type="button"
            onClick={hideModal}
            aria-label="close modal"
          >
            <IoCloseOutline aria-hidden className="modal__close" />
          </CloseButton>
        </ModalTitleContainer>
        <Form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <Button
            aria-label="save new contact"
            type="button"
            onClick={hideModal}
          >
            Add
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AddContact;
