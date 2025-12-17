import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.secondary};
    }

    .main {
        padding: 5px 0;
        background-color: ${props => props.theme.colors.secondary};
    }

    button {
        margin: 10px 0;
        padding: 5px;
        background-color: ${props => props.theme.colors.primaryButton};

        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.colors.hoverButton};
            border-color: ${props => props.theme.colors.primaryButton};
            color: ${props => props.theme.colors.hoverButtonSecondary};
        }

        &:focus {
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.tertiary};
            border: 3px solid ${props => props.theme.colors.hoverButtonSecondary};
            outline: none;
        }
    }

    header {
        background-color: ${props => props.theme.colors.primary};
        padding: 5px;
        font-family: 'urbanist';

        h1 {
            color: ${props => props.theme.colors.tertiary};
            padding: 5px 0px;
            font-size: 30px;
        }
    }

    nav {
        .header-nav {
            text-decoration: none;
            color: ${props => props.theme.colors.tertiary};
            margin-inline-end: 20px;

            &:hover {
                color: ${props => props.theme.colors.hoverButtonSecondary};
            }
        }
    }

    .songs-section {
        display: flex;
        justify-content: center;

        article {
            margin: 10px;
        }

        h2 {
            color: ${props => props.theme.colors.title};
        }


    }
`;

export default GlobalStyle;