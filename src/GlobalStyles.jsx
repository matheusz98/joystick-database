import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: var(--dark);
        color: var(--white);
    }

    ::-webkit-scrollbar {
        width: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #c5c9ca;
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: #949fa1;
    }

    img {
        max-width: 100%;
    }

    :root {
        --dark: #121212;
        --white: #ffffff;
        --gray: #3c3c3c;
        --lightGray: #8a8a8a;
        --purple: #9038b9;
    }
`;
