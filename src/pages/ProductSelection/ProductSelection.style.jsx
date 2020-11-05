import styled from "styled-components";

export const ProductSelection = styled.main`
  min-height: calc(100vh - 85px);
`;

export const TwoGridDesktop = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CardWrapper = styled.div`
  padding: 0.5em 0;

  @media only screen and (min-width: 768px) {
    width: calc(50% - 1em);
    padding: 1em 0 0;
    &:nth-child(odd) {
      padding-right: 0.5em;
    }
    &:nth-child(even) {
      padding-left: 0.5em;
    }
  }
`;
