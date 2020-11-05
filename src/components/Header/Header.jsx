import React from "react";
import * as S from "./Header.style";
import logoImg from "../../assets/logo.png";

function Header() {
  return (
    <S.Header>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.StyledLink to="/">
            <S.Logo src={logoImg} alt="Logo" />
          </S.StyledLink>
          <S.LogoTitle>Filter clothes</S.LogoTitle>
        </S.LogoWrapper>
        <S.Actions>
          <S.StyledLink to="/">Home</S.StyledLink>
          <S.StyledLink to="/about">About</S.StyledLink>
        </S.Actions>
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
