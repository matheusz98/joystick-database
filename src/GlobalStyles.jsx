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

    img {
        max-width: 100%;
    }

    :root {
        --dark: #151515;
        --white: #ffffff;
    }
`;
