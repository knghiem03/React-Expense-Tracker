import React, { Component } from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    // Calculate the max value
    // Transform from object to number
    // Use spread operator to pull data out of dataPointValues
    // max need 12 arguments, not an array
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues)
    return (
    <div className="chart">
        {props.dataPoints.map((dataPoint) => (
            <ChartBar key = {dataPoint.label}
                      value = {dataPoint.value}
                      maxValue = {totalMaximum}
                      label = {dataPoint.label}
            />
        ))}
    </div>
    ); 
};
export default Chart;
