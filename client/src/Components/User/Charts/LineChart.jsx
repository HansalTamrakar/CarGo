import React from 'react'
import  {Line} from "react-chartjs-2";
import {Chart as ChartJS} from  'chart.js/auto';
const BarCharts = ({chartData}) => {
   
    const options= {
        scales: {
            r: {
              ticks: {
                backdropPadding: {
                    x: 30,
                    y: 30
                }
              }
          }
      },
       
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 26
                    }
                }
            }
        }
    }
  return (
    <Line data={chartData} options={options} />
  )
}

export default BarCharts