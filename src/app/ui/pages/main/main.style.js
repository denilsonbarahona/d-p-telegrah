import styled from "styled-components";

export const NotifyCall = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font: var(--body-16bold);
    color: #fff;
    background: linear-gradient(30deg, #cfff09, #6d4037, #f8ab4b, #85a41d, #118aac);
    background-size: 300% 300%;
    animation: gradient-animation 5s ease infinite;

    @keyframes gradient-animation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% {  background-position: 0% 50%; }
    }
`;

export const AcceptCall = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font: var(--body-14regular_u);
    color: #0000EE;
`;

export const RejectCall = styled.button`
    border: none;
    background: rgb(244,77,77);
    cursor: pointer;
    font: var(--caption-12bold);
    color: #fff;
    border-radius: 5px;
`;