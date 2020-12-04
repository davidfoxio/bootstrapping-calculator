import React from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

export default function AnnualIncomeChart({ monthlyIncomeGrowth }) {
  const drawChart = () => {
    const data = [12, 5, 6, 6, 9, 10];

    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', 700)
      .attr('height', 300);
  };
  return (
    <div>
      <h1>Annual Income Chart</h1>
    </div>
  );
}

AnnualIncomeChart.propTypes = {
  monthlyIncomeGrowth: PropTypes.number,
};
