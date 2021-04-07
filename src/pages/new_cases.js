import React from "react";

import XYChart from "../utils/XYChart";

const NewCases = () => {
  const chartInfo = {
    chartID: "new-cases",
    optionName: "New Cases",
    fieldName: "new_cases",
  };

  XYChart(chartInfo);

  return <div id="new-cases" style={{ width: "100%", height: "500px" }}></div>;
};

export default NewCases;
