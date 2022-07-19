import React, { useContext, useState } from "react";
import * as S from "./LoginForm.styles";
import { AccountContext } from "../../accountContext";

const LoginForm = (handleSubmit) => {
  const [loginValues, setLoginValues] = useState();
  const { switchToSignup } = useContext(AccountContext);
  return (
    <>
      <S.FormContainer>
        <S.LoginForm
          onSubmit={() => {
            handleSubmit(loginValues);
          }}
        >
          <S.FormInput
            type="email"
            placeholder="email"
            onChange={(e) => {
              setLoginValues({ ...loginValues, email: e.target.value });
            }}
          />
          <S.FormInput
            type="password"
            placeholder="password"
            onChange={(e) => {
              setLoginValues({
                ...loginValues,
                password: e.target.value.trim(),
              });
            }}
          />
          <S.SubmitButton type="submit">Login</S.SubmitButton>
        </S.LoginForm>
        <S.TextContainer>
          <S.Text>Not register yet? </S.Text>
          <S.Link onClick={switchToSignup}> sign up </S.Link>
        </S.TextContainer>
      </S.FormContainer>
    </>
  );
};

export default LoginForm;
