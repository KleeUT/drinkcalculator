import React from "react";
import { connect } from "react-redux";
import { updateVolume, updatePercentage } from "./actionCreator";

import { Input } from "../components";
import VolumeEntry from "./VolumeEntry";
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
      <VolumeEntry volume={volume} volumeUpdated={handleVolumeUpdate} />

      <Input
        type="number"
        value={percentage}
        label="Alcahol %"
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
