import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: small;
  visibility: ${props => (props.hide ? "hidden" : "visible")};
  color: #751619;
`;

export default props => <Label hide={props.hide}>{props.children}</Label>;
