import React from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

export default function SavingsBalanceChart({
  liquidSavings,
  monthlyOutgoings,
  monthlyIncomeGrowth,
  surrenderThreshold,
}) {
  return (
    <div>
      <h1>Savings Balance Chart</h1>
    </div>
  );
}

SavingsBalanceChart.propTypes = {
  liquidSavings: PropTypes.number,
  monthlyOutgoings: PropTypes.number,
  monthlyIncomeGrowth: PropTypes.number,
  surrenderThreshold: PropTypes.number,
};
