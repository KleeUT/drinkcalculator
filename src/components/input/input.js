import React from "react";
import styled from "styled-components";
import Label from "../label";
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  background: #fff;
  border: 2px solid #751619;
  color: #751619;
`;
const Padder = styled.div`
  margin: 0.5rem;
`;

const RawInput = ({ value, placeholder, onChange, type }) => {
  return (
    <Input
      type={type || "text"}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const LabeledInput = ({ value, label, onChange, type }) => {
  const id = Math.random();
  return (
    <Padder>
      <Label for={id} hide={!value}>
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
