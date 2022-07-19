import React, { useContext } from "react";
import * as S from "./RegisterForm.styles";
import { AccountContext } from "../../accountContext";

const RegisterForm = () => {
  const { switchToSignin } = useContext(AccountContext);
  return (
    <>
      <S.FormContainer>
        <S.RegisterForm>
          <S.FormInput type="text" placeholder="username" />
          <S.FormInput type="email" placeholder="email" />
          <S.FormInput type="password" placeholder="password" />
          <S.SubmitButton>Register</S.SubmitButton>
          <S.TextContainer>
            <S.Text>Already registered? </S.Text>
            <S.Link onClick={switchToSignin}> Sign in </S.Link>
          </S.TextContainer>
        </S.RegisterForm>
      </S.FormContainer>
    </>
  );
};

export default RegisterForm;
