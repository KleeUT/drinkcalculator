import React from "react";
import styled from "styled-components";

const Main = styled.div`
  margin: auto;
  width: 75%;
  background: #fffa;
  text-align: center;
  @media (max-width: 60rem) {
    width: 100%;
  }
  height: 100%;
`;

const main = props => <Main>{props.children}</Main>;

export default main;
