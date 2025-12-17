import styled from "styled-components";

const LoginDiv = styled.div`
    box-sizing: border-box;
    margin: 20px;
    display: flex;
    justify-content: space-between;
`;

const InputElement = styled.input`
    border-radius: 50px;
    padding-inline-start: 10px;
    padding-block: 5px;
    font-size: 15px;
    border: 3px solid #794507;

    &:focus {   
        border: 3px solid #eda11b;
        outline: none;
    }
`;

const LoginSection = styled.section`
    margin: 20px;
    display: block;
    width: 30%;
`;

const LoginTitle = styled.h1`
    color: #fffa00;
    margin: 10px;
    font-size: 20px;
    text-align: center;
    font-weight: 500;
`;

const LoginLabel = styled.label`
    color: #eda11b;
    font-size: 20px;
    font-weight: 600;
    align-content: center;
`;

const LoginButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const LoginButton = styled.button`
    margin: 10px 0;
    padding: 5px;
    background-color: #442c02;
    color: #fffa00;

    &:hover {
        cursor: pointer;
        background-color: #794507;
        border-color: #442c02;
        color: #ff9309;
    }
`;

export {
    LoginSection,
    InputElement,
    LoginDiv,
    LoginTitle,
    LoginLabel,
    LoginButtonDiv,
    LoginButton,
}