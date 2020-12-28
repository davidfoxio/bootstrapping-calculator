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
} from 'recharts';

export default function AnnualIncomeChart({ yearlyIncome }) {
  const data = [];
  yearlyIncome.forEach((element, index) =>
    data.push(
      Object.create({
        name: index,
        Income: element,
      })
    )
  );
  return (
    <div>
      <h2>Annual Income Chart</h2>
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
        <YAxis type="number" domain={[0, 0]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Income" stroke="#82ca9d" dot={false} />
      </LineChart>
    </div>
  );
}

AnnualIncomeChart.propTypes = {
  yearlyIncome: PropTypes.array,
};
