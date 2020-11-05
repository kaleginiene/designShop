import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  padding: 1em;
  border-bottom: 1px solid #eee;
`;
export const Wrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;

export const LogoTitle = styled(Link)`
  font-family: "Dancing Script", cursive;
  font-size: 0.9em;
  color: #222;
  text-decoration: none;
  margin-top: -8px;
`;
export const LogoWrapper = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  font-size: 0.9em;
  color: #222;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
