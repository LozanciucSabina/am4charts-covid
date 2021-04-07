import { useEffect } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import country from "../data/owid-covid-data.json";

export default function XYChart({ chartID, optionName, fieldName }) {
  am4core.useTheme(am4themes_animated);

  useEffect(() => {
    let chart = am4core.create(chartID, am4charts.XYChart);
    let { data } = country.MDA;
    chart.paddingRight = 20;
    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.title.text = "Date";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.title.text = `Covid-19 ${optionName}`;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = `${fieldName}`;

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [chartID, optionName, fieldName]);
}
