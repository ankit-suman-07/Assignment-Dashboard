import React from 'react';
import "../css/PieChart.css";

import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const PieChart = () => {
  const options = {
    // theme: 'dark2',
    animationEnabled: true,
    // exportFileName: "New Year Resolutions",
    // exportEnabled: true,
    title: {
      text: "Top Products"
    },
    data: [{
      type: "pie",
      showInLegend: true,
      legendText: "{label}",
      toolTipContent: "{label}: <strong>{y}%</strong>",
      indexLabel: "{y}%",
      indexLabelPlacement: "inside",
      dataPoints: [
        { y: 31, label: "Basic Tees" },
        { y: 55, label: "Custom Short Pants" },
        { y: 14, label: "Super Hoodies" }
      ]
    }]
  };

  return (
    <div className='pie-chart-comp' >
      <CanvasJSChart options={options} />
    </div>
  );
}
