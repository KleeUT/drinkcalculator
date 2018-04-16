import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  /* margin: 0.5rem; */
`;
const Padder = styled.div`
  margin: 0.5rem;
`;
const Label = styled.label`
  display: block;
  text-align: left;
  font-size: small;
  visibility: ${props => (props.hide ? "visible" : "hidden")};
`;

const RawInput = ({ value, placeholder, onChange, type }) => {
  return (
    <Input
      type={type || "text"}
      text={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const LabeledInput = ({ value, label, onChange, type }) => {
  const id = Math.random();
  return (
    <Padder>
      <Label for={id} hide={!!value}>
        {label}
      </Label>
      <RawInput
        type={type}
        id={id}
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </Padder>
  );
};

export default LabeledInput;
