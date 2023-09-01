import React from 'react';
import "../css/Graph.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Week", "Value 1", "Value 2"],
  ["Week 1", 390, 400],
  ["Week 2", 150, 220],
  ["Week 3", 540, 350],
  ["Week 4", 120, 220],
];


export const options = {
  
  curveType: "function",
  legend: "none",
  colors: ["#E9A0A0", "#9BDD7C"],
  hAxis: {
    gridlines: {
      count: data.length - 1, // Number of vertical gridlines (one less than data points)
      color: "lightgray", // Color of gridlines
    },
  },
};

export const Graph = () => {
  return (
    <div className='chart-div' >
      <div className='chart-head-div' >
        Activities
      </div>
      <div className='graph-legends-div' >
        Sort 
        <div className='graph-legends' >
          <div className='circle pink' ></div>
          Guest
          <div className='circle green' ></div>
          Users
        </div>
      </div>
      <Chart
      chartType="LineChart"
      width="100%"
      height="180px"
      data={data}
      options={options}
    />
    </div>
    
  );
}
