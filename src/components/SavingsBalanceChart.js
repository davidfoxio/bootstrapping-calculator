/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';

export default function SavingsBalanceChart({
  liquidSavings,
  monthlyOutgoings,
  surrenderThreshold,
  monthlyIncome,
}) {
  const data = [];
  // runway
  const runway = [];
  for (let i = 0; i < 121; i++) {
    runway.push(liquidSavings - i * monthlyOutgoings);
  }

  // balance
  const balance = [];
  for (let i = 0; i < 121; i++) {
    const saved = monthlyIncome
      .filter((figure, index) => index <= i)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    // eslint-disable-next-line no-unused-expressions
    runway[i] ? balance.push(runway[i] + saved) : balance.push(saved);
  }

  balance.forEach((element, index) => {
    const obj = Object.create({
      name: index,
      Balance: element,
    });
    return (
      runway[index] >= 0 ? (obj.Runway = runway[index]) : '', data.push(obj)
    );
  });

  return (
    <div>
      <h1>Savings Balance Chart</h1>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Runway" stroke="#d8d284" dot={false} />
        <Line type="monotone" dataKey="Balance" stroke="#346de9" dot={false} />
        <ReferenceLine
          y={surrenderThreshold * monthlyOutgoings}
          label="Surrender Threshold"
          stroke="red"
          strokeDasharray="3 3"
        />
      </LineChart>
    </div>
  );
}

SavingsBalanceChart.propTypes = {
  liquidSavings: PropTypes.number,
  monthlyOutgoings: PropTypes.number,
  surrenderThreshold: PropTypes.number,
  monthlyIncome: PropTypes.array,
};
