import styled from "styled-components";

export const Card = styled.div`
  padding: 10px;
  border: 1px solid #444;
  box-sizing: border-box;
  box-shadow: 2px 5px 5px 2px #cacaca;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 5px 5px 2px #919090;
    transition: ease-in 0.5s;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 310px;
  max-width: 100%;
  object-fit: contain;
`;

export const Title = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

export const LoadingCard = styled.div`
  padding: 10px;
  border: 1px solid #444;
  box-sizing: border-box;
  box-shadow: 2px 5px 5px 2px #cacaca;
  text-align: center;
  &:hover {
    box-shadow: 2px 5px 5px 2px #919090;
    transition: ease-in 0.5s;
  }
`;
