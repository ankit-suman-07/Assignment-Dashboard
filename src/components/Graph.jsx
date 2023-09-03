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
      <form>
        <label for="month"></label>
        <select id="month" name="month">
            <option value="0" selected>Jan - Feb 2023</option>
            <option value="1">Feb - March 2023</option>
            <option value="2">March - Apr 2023</option>
            <option value="3">Apr - May 2023</option>
            <option value="4">May - June 2023</option>
            <option value="5">June - July 2023</option>
            <option value="6">July - Aug 2023</option>
            <option value="7">Aug - Sept 2023</option>
            <option value="8">Sept - Oct 2023</option>
            <option value="9">Oct - Nov 2023</option>
            <option value="10">Nov - Dec 2023</option>
            
        </select>        

    </form> 
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
