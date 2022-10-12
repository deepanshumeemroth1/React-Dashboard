import './App.css';
import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import myData from './Wine-Data.json';

/**
 *This function will render the html including the react charts
 *
 * 
 */
function App() {
  const [color, ] = useState([]);
  const [hue, ] = useState([]);
  const [category, ] = useState({});
  const [count, ] = useState([]);
  const [average, ] = useState([]);

  useEffect(() => {
    count[3] = 0
    count[1] = 0
    count[2] = 0
    category[3] = 0                       
    category[1] = 0
    category[2] = 0
    for(let i =0;i<myData.length;i++){
      color.push(myData[i]["Color intensity"])
      hue.push(myData[i]["Hue"])
      
      count[myData[i]["Alcohol"]] = count[myData[i]["Alcohol"]] + 1
      // console.log(category , category[myData[i]["Malic Acid"]])
      category[myData[i]["Alcohol"]] = category[myData[i]["Alcohol"]] + myData[i]["Malic Acid"]
    }
    for(let i = 0; i<count.length;i++){
      average[i] = category[i]/count[i]
    }
  });
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: color,
      name: 'Y-Axis',
      nameLocation: 'middle',
      nameGap: 50
    },
    yAxis: {
      type: 'value',
      name: 'Y-Axis',
      nameLocation: 'middle',
      nameGap: 50
    },
    series: [
      {
        data: hue,
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  const optionBar = {
    xAxis: {
      type: 'category',
      data: [0,1,2,3]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: average,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };
  
  return (
    <div className="App">
      <header className="app-header">
        <div>
          Dashboard - Wine Data
        </div>
      </header>
      <body>
        <div className='graph-header'>Scatter Plot</div>
      <ReactECharts option={options} />
      <div className='graph-header'>Bar Chart</div>
      <ReactECharts option={optionBar} />
      <footer className='app-footer'>Manufac Analytics Private Limited</footer>
      </body>
    </div>
  );
}

export default App;
