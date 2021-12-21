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
        --gray: #3c3c3c;
        --lightGray: #8a8a8a;
        --purple: #9038b9;
    }
`;
