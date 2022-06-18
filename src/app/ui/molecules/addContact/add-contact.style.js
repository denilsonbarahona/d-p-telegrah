import styled from "styled-components";

export const AddContainer = styled.button`
  padding: 1rem;
  display: flex;
  font: var(--body-16regular);
  color: var(--light-blue);
  gap: 0.5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  border-block-end: 1px solid var(${(props) => props.theme.divider});
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 1rem;
  inline-size: 100%;

  & .modal__close {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.h3`
  font: var(--body-16bold);
  margin: 0;
`;

export const Form = styled.form`
  display: grid;
  gap: 0.5rem;
`;

export const Input = styled.input`
  font: var(--body-16regular);
  border: none;
  border-block-end: 1px solid var(${(props) => props.theme.divider});
  padding: 0.25rem;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
`;

export const Button = styled.button`
  margin-block-start: 1rem;
  font: var(--body-16regular);
  color: var(--light-blue);
  background-color: transparent;
  cursor: pointer;
  border: none;
`;
