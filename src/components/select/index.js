import React from "react";
import styled from "styled-components";
import Label from "../label";
const Select = styled.select`
  padding: 0.5rem;
  background: #fff;
  border: 2px solid #751619;
  color: #751619;
  width: 100%;
`;
const Padder = styled.div`
  margin: 0.5rem;
`;
export default ({ options, label, onChange, value }) => (
  <Padder>
    <Label hide={true}>{label}</Label>
    <Select onChange={onChange} value={value}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </Select>
  </Padder>
);
