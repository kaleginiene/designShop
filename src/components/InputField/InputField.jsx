import React from "react";
import * as S from "./InputField.style";

function InputField({
  type,
  placeholder,
  handleChange,
  options,
  radioId,
  label,
  radioName,
}) {
  switch (type) {
    case "number":
      return (
        <S.Input
          type="number"
          step="0.1"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
    case "longtext":
      return (
        <S.TextArea
          type="longtext"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
    case "dropdown":
      return (
        <S.Select type="dropdown" onChange={handleChange} defaultValue>
          <option disabled value>
            {options[0].name}
          </option>
          {options.slice(1).map((option) => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
        </S.Select>
      );
    case "radio":
      return (
        <>
          <S.RadioLabel>
            {label}
            <S.Radio
              type="radio"
              id={radioId}
              onChange={handleChange}
              defaultValue
              name={radioName}
            />
          </S.RadioLabel>
        </>
      );
    default:
      return (
        <S.Input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
  }
}

export default InputField;
