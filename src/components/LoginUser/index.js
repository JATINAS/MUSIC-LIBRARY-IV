import { useState } from "react"

import { InputElement, LoginButton, LoginButtonDiv,  LoginDiv, LoginLabel, LoginSection, LoginTitle } from "./styles";

const LoginUser = () => {
    
    const [userName, setUserName] = useState({user: ""});

    const handleChange = (e) => {
        const {value} = e.target;
        setUserName(value);    
    }


    const handleSubmit = (e) => {


        e.preventDefault();
        setUserName(userName);
        alert(`Thanks for Login ${userName}!`);
    }



    return (
        <LoginSection>
            <LoginTitle>PLEASE, LOGIN ON YOUR ACCOUNT</LoginTitle>
            <form onSubmit={handleSubmit}>
                <LoginDiv>
                    <LoginLabel for="name">User Name:</LoginLabel>
                    <InputElement 
                        type="text"
                        name="user-name"
                        placeholder="User name"
                        id="name"
                        aria-label="Ingresa tu nombre de Usuario"
                        value={userName.user}
                        onChange={(e) => handleChange(e)} 
                    />
                </LoginDiv>

                <LoginDiv>
                    <LoginLabel for="email">Email:</LoginLabel>
                    <InputElement
                        type="password"
                        name="user-name"
                        placeholder="Password"
                        id="email"
                        aria-label="Ingresa tu direccion de correo electronico"
                    />
                </LoginDiv>

                <LoginButtonDiv>
                    <LoginButton type="submit" role="button" aria-label="Login to your account">Login</LoginButton>
                </LoginButtonDiv>
                
            </form>
        </LoginSection>
    )
}

export default LoginUser;