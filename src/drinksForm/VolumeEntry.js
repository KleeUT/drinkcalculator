import React from "react";
import { Input, Select } from "../components";

const VolumeEntry = ({ volumeUpdated, volume }) => {
  return (
    <div>
      <Select
        onChange={volumeUpdated}
        value={volume}
        options={[
          { value: 0, text: "Custom" },
          { value: 30, text: "Nip 30ml" },
          { value: 140, text: "Pony 140ml" },
          { value: 200, text: "Seven 200ml" },
          { value: 285, text: "Middy 285ml" },
          { value: 475, text: "Schooner 475ml" },
          { value: 570, text: "Imperial Pint 570ml" }
        ]}
        label="drink volume"
      />
      <Input
        type="number"
        value={volume}
        label="Drink Volume (ml)"
        onChange={volumeUpdated}
      />
    </div>
  );
};

export default VolumeEntry;
