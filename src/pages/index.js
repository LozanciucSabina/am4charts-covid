import React, { useEffect } from "react"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
import country from "../data/owid-covid-data.json"

am4core.useTheme(am4themes_animated)

export default function Home() {
  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart)
    let { data } = country.MDA
    chart.paddingRight = 20
    chart.data = data

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0
    dateAxis.title.text = "Date"

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = true
    valueAxis.renderer.minWidth = 35
    valueAxis.title.text = "New Covid-19 Cases"

    let series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.dateX = "date"
    series.dataFields.valueY = "new_cases"

    series.tooltipText = "{valueY.value}"
    chart.cursor = new am4charts.XYCursor()

    let scrollbarX = new am4charts.XYChartScrollbar()
    scrollbarX.series.push(series)
    chart.scrollbarX = scrollbarX

    return () => {
      if (chart) {
        chart.dispose()
      }
    }
  })

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
}
