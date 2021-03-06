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
  ResponsiveContainer,
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
    <div className="savingsBalanceChart">
      <h2 className="chart-title">Savings Balance Chart</h2>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 'dataMax']} allowDataOverflow />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Runway"
            stroke="rgb(218, 207, 0)"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Balance"
            stroke="rgba(150, 174, 255)"
            dot={false}
          />
          <ReferenceLine
            y={surrenderThreshold * monthlyOutgoings}
            stroke="rgba(255, 72, 72)"
            strokeDasharray="3 3"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

SavingsBalanceChart.propTypes = {
  liquidSavings: PropTypes.number,
  monthlyOutgoings: PropTypes.number,
  surrenderThreshold: PropTypes.number,
  monthlyIncome: PropTypes.array,
};
