import styled from "styled-components";

const NavSection = styled.section`
    padding: 10px;
    font-size: 20px;
`;

const NavDiv = styled.div`
    margin-bottom: 10px;
`;

const NavLabelInput = styled.label`
    margin-right: 10px;
`;

const NavTextInput = styled.input`
    border-radius: 50px;
    padding: 0 0 0 10px;
    font-size: 15px;

    &:focus {
        border: 3px solid #eda11b;
        outline: none;
    }
`;

export {
    NavSection,
    NavDiv,
    NavTextInput,
    NavLabelInput,
}