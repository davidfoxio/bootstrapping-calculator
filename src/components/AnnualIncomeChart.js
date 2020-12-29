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
  ResponsiveContainer,
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
    <div className="annualIncomeChart">
      <h2 className="chart-title">Annual Income Chart</h2>
      <ResponsiveContainer>
        <LineChart
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
          <Line
            type="monotone"
            dataKey="Income"
            stroke="rgba(20, 175, 20)"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AnnualIncomeChart.propTypes = {
  yearlyIncome: PropTypes.array,
};
