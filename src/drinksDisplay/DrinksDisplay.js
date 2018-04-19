import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Display = styled.div`
  font-size: 6rem;
  color: #751619;
`;
const DrinksDisplay = ({ drinks }) => {
  return (
    <Display>
      <p>{drinks}</p>
    </Display>
  );
};

const mapStateToProps = state => ({
  drinks: Math.floor(state.app.drinks * 100) / 100
});
export default connect(mapStateToProps)(DrinksDisplay);
