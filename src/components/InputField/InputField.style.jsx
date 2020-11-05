import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary.background};
  padding: 0 5px;
  height: ${(props) => props.theme.primary.height};
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary.background};
  padding: 5px;
`;

export const Select = styled.select`
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary.background};
  padding: 5px;
`;
export const Radio = styled.input`
  width: 15px;
  margin-right: 10px;
  margin-left: 5px;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  margin: 10px;
`;
