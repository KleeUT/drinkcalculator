import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.75rem;
  background: brown;
  border: 0;
  color: white;
`;

const button = ({ text, onClick }) => <Button onClick={onClick}>{text}</Button>;

export default button;
