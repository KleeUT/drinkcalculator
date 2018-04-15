import React from "react";
import { connect } from "react-redux";
import { updateVolume, updatePercentage } from "./actionCreator";

import { Input } from "../components";
const DrinksForm = ({
  volume,
  volumeUpdated,
  percentage,
  percentageUpdated
}) => {
  const handleVolumeUpdate = e => {
    volumeUpdated(percentage, e.target.value);
  };
  const handlePercentageUpdate = e => {
    percentageUpdated(e.target.value, volume);
  };
  return (
    <div>
      <Input
        type="number"
        value={volume}
        label="Drink Volume (ml)"
        placeholder="425"
        onChange={handleVolumeUpdate}
      />
      <Input
        type="number"
        value={percentage}
        label="Alcahol %"
        placeholder="4.7"
        onChange={handlePercentageUpdate}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    volumeUpdated: (percentage, volume) =>
      dispatch(updateVolume(percentage, volume)),
    percentageUpdated: (percentage, volume) =>
      dispatch(updatePercentage(percentage, volume))
  };
};

const mapStateToProps = state => {
  return {
    volume: state.app.volume,
    percentage: state.app.percentage
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksForm);
