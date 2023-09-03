import {React, useState} from 'react';
import "../css/PieChart.css";
import { Chart } from "react-google-charts";
import { TopProductData } from '../helper/TopProductsDB';


export const options = {
  colors: ["#98D89E", "#EE8484", "F6DC7D"],
  legend: "none",
  pieSliceText: "none", // Hide percentages on the pie chart
  // title: "Top Products",
};


export const PieChart = () => {
  const [selectedValue, setSelectedValue] = useState('0');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='pie-chart-comp' >
      <div  className='pie-chart-header' >
          <span>Top Products </span>
          <span>
    <form>
        <label for="startMonth"></label>
        <select id="startMonth" name="startMonth" value={selectedValue} onChange={handleChange}>
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
          data={TopProductData[selectedValue % 6]}
          options={options}
          width={"70%"}
          height={"170px"}
        />

        <div className='pie-chart-details' >
          <div className='pie-chartitem' >
            <div className='pie-chart-inner' >
              <div className='circle green' ></div> <span className='item-name' >{ TopProductData[selectedValue % 6][1][0] }</span>
            </div>
            <div className='pie-chart-inner' >
              <div className='circle white' ></div> <span className='item-amount' >{ TopProductData[selectedValue % 6][1][1] } %</span>
            </div>
            
          </div>

          <div className='pie-chartitem' >
            <div className='pie-chart-inner' >
              <div className='circle yellow' ></div> <span className='item-name' >{ TopProductData[selectedValue % 6][2][0] }</span>
            </div>
            <div className='pie-chart-inner' >
              <div className='circle white' ></div> <span className='item-amount' >{ TopProductData[selectedValue % 6][2][1] } %</span>
            </div>
            
          </div>

          <div className='pie-chartitem' >
            <div className='pie-chart-inner' >
              <div className='circle pink' ></div> <span className='item-name' >{ TopProductData[selectedValue % 6][3][0] }</span>
            </div>
            <div className='pie-chart-inner' >
              <div className='circle white' ></div> <span className='item-amount' >{ TopProductData[selectedValue % 6][3][1] } %</span>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
