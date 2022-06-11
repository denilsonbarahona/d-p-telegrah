import React from "react";
import { IoPersonAddOutline, IoCloseOutline } from "react-icons/io5";
import Modal from "@atoms/modal";
import { createContact } from "@Redux/features/contact/actions";
import { useDispatch } from "react-redux";
import {
  AddContainer,
  ModalTitle,
  ModalTitleContainer,
  Form,
  Input,
  Button,
  CloseButton,
} from "./add-contact.style";

const AddContact = () => {
  const dispatch = useDispatch();

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

  const onSubmitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get("name");
    const email = data.get("email");
    dispatch(
      createContact({
        name,
        email,
        owner: "91sbarahona@gmail.com",
      })
    );
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
        <Form onSubmit={onSubmitForm}>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="text" name="email" placeholder="Email" />
          <Button aria-label="save new contact" type="submit">
            Add
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AddContact;
