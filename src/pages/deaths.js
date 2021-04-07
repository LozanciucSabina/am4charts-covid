import React from "react";

import XYChart from "../utils/XYChart";

const Deaths = () => {
  const chartInfo = {
    chartID: "death-cases",
    optionName: "Deaths",
    fieldName: "new_deaths",
  };
  XYChart(chartInfo);
  return (
    <div id="death-cases" style={{ width: "100%", height: "500px" }}></div>
  );
};

export default Deaths;
