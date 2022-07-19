import React, { useState } from "react";
import * as S from "./Account.styles";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { CSSTransition } from "react-transition-group";
import { AccountContext } from "../../accountContext";

const Account = () => {
  const [isExpended, setExpanded] = useState(true);
  const [active, setActive] = useState("signin");

  const click = () => {
    setExpanded(!isExpended);
    setTimeout(() => {
      setExpanded(true);
    }, 100);
  };

  const switchToSignup = () => {
    click();
    setTimeout(() => {
      setActive("signup");
    }, 1000);
  };

  const switchToSignin = () => {
    click();
    setTimeout(() => {
      setActive("signin");
    }, 1000);
  };

  const contextValue = { switchToSignin, switchToSignup };

  return (
    <AccountContext.Provider value={contextValue}>
      <S.Container>
        <S.Section>
          <S.FormContainer>
            <CSSTransition in={isExpended} timeout={1000} classNames="overlay">
              <S.Overlay>
                {active === "signin" && (
                  <S.TextWrapper>
                    <S.Text>Welcome </S.Text>
                    <S.Text>Back </S.Text>
                    <S.SmallText>Please sign-in to continue</S.SmallText>
                  </S.TextWrapper>
                )}
                {active === "signup" && (
                  <S.TextWrapper>
                    <S.Text>Create </S.Text>
                    <S.Text>Account </S.Text>
                    <S.SmallText>Please sign-up to continue</S.SmallText>
                  </S.TextWrapper>
                )}
              </S.Overlay>
            </CSSTransition>
            <S.FormsContainer>
              {active === "signin" && <LoginForm />}
              {active === "signup" && <RegisterForm />}
            </S.FormsContainer>
          </S.FormContainer>
        </S.Section>
      </S.Container>
    </AccountContext.Provider>
  );
};

export default Account;
