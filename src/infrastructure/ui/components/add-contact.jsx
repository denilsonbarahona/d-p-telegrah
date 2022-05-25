import React from "react";
import { IoPersonAddOutline, IoCloseOutline } from "react-icons/io5";
import {
  AddContainer,
  ModalTitle,
  ModalTitleContainer,
  Form,
  Input,
  Button,
} from "@Style-components/add-contact.style";
import Modal from "@UI-components/modal";

const AddContact = () => {
  const showModal = (event) => {
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
    <AddContainer aria-label="click to add new contact" onClick={showModal}>
      <Modal>
        <ModalTitleContainer>
          <ModalTitle>Add a new contact</ModalTitle>
          <IoCloseOutline
            tabIndex="0"
            onClick={hideModal}
            className="modal__close"
          />
        </ModalTitleContainer>
        <Form method="dialog">
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
      <IoPersonAddOutline />
      Add contact
    </AddContainer>
  );
};

export default AddContact;
