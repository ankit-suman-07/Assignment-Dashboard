import React from 'react';
import "../css/PieChart.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Products", "Sales"],
  ["Basic Tees", 55],
  ["Custom Short Pants", 31],
  ["Super Hoodies", 14],
];

export const options = {
  colors: ["#98D89E", "#EE8484", "F6DC7D"],
  legend: "none",
  pieSliceText: "none", // Hide percentages on the pie chart
  // title: "Top Products",
};


export const PieChart = () => {
  

  return (
    <div className='pie-chart-comp' >
      <div  className='pie-chart-header' >
          <span>Top Products </span>
          <span>
    <form>
        <label for="startMonth"></label>
        <select id="startMonth" name="startMonth">
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

          </span>
      </div>
      <div className='pie-chart-main' >
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"70%"}
          height={"170px"}
        />

        <div className='pie-chart-details' >
          <div className='pie-chartitem' >
            <div className='pie-chart-inner' >
              <div className='circle green' ></div> <span className='item-name' >Basic Tees</span>
            </div>
            <div className='pie-chart-inner' >
              <div className='circle white' ></div> <span className='item-amount' >55%</span>
            </div>
            
          </div>

          <div className='pie-chartitem' >
            <div className='pie-chart-inner' >
              <div className='circle yellow' ></div> <span className='item-name' >Custom Short Pants</span>
            </div>
            <div className='pie-chart-inner' >
              <div className='circle white' ></div> <span className='item-amount' >31%</span>
            </div>
            
          </div>

          <div className='pie-chartitem' >
            <div className='pie-chart-inner' >
              <div className='circle pink' ></div> <span className='item-name' >Super Hoodies</span>
            </div>
            <div className='pie-chart-inner' >
              <div className='circle white' ></div> <span className='item-amount' >14%</span>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
