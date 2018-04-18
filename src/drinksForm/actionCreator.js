export const actionTypes = {
  updateVolume: "UPDATE_VOLUME",
  updatePercentage: "UPDATE_PERCENTAGE"
};
export const updateVolume = (percentage, volume) => {
  return {
    type: actionTypes.updateVolume,
    volume: volume,
    drinks: calculateStandardDrinks(volume, percentage)
  };
};
export const updatePercentage = (percentage, volume) => {
  const roundedPercent =
    percentage > 100 ? 100 : percentage < 0 ? 0 : percentage;
  return {
    type: actionTypes.updatePercentage,
    percentage: roundedPercent,
    drinks: calculateStandardDrinks(volume, roundedPercent)
  };
};

function calculateStandardDrinks(volume = 0, percentage = 0) {
  return volume / 1000 * percentage * 0.789;
}
