import Styled from "styled-components";

export const SearchForm = Styled.form`
    position: relative; 
    & .form__icon{
        position: absolute;
        inset-inline-start: 0.5rem;
        inset-block-start: 50%;
        transform: translateY(-50%);
        color: var(${(props) => props.theme.BaseTextColor});
    }
`;

export const SearchText = Styled.input`
    font: var(--body-16regular);
    padding: 0.5rem;
    padding-inline-start: 2rem;
    border: none;
    border-radius: 50px; 
    inline-size: 100%;
    color: var(${(props) => props.theme.BaseTextColor});
    background-color: var(${(props) => props.theme.background});
`;
