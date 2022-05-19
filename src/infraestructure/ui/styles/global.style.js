import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --black: #000000; 
        --white: #ffffff; 
        --light-grey-1: #666667; 
        --light-grey-2: #f2f2f2; 
        --light-grey-3: #f6f6f6; 
        --light-grey-4: #ededed; 
        --light-red: #ff4a4a; 
        --light-blue: #62a1dd; 
        --dark-blue: #77aee2; 
        --dark-grey-1: #666667; 
        --dark-black-1: #0d0d0d; 
        --dark-black-2: #1a1a1a; 
        --dark-black-3: #09212f; 
        --dark-black-4: #161616; 
        --dark-red: #ff6464; 
        --body-16regular: 400 1rem/1.25rem Inter; 
        --body-16bold: 700 1rem/1.25rem Inter; 
        --body-14regular: 400 0.875rem/1.125rem Inter; 
        --body-14regular_u: 500 0.875rem/1.25rem Inter; 
        --caption-12bold: 700 0.75rem/1rem Inter; 
        --caption-12regular: 400 0.75rem/1rem Inter; 
        --caption-12regular_u: 400 0.75rem/1.25rem Inter; 
    }

    body {
        font-size: 16px;
        margin:0;
        padding:0;
    }
`;

export default GlobalStyle;
