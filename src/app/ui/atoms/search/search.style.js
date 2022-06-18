import Styled from "styled-components";

export const SearchForm = Styled.form`
    position: relative; 
    & .form__icon{
        position: absolute;
        inset-inline-start: 0.5rem;
        inset-block-start: 50%;
        transform: translateY(-50%);
    }
`;

export const SearchText = Styled.input`
    font: var(--body-16regular);
    padding: 0.5rem;
    padding-inline-start: 2rem;
    border: none;
    border-radius: 50px; 
    inline-size: 100%;
`;
