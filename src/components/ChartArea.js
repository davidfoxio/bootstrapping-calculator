import React from 'react';
import PropTypes from 'prop-types';
import SavingsBalanceChart from './SavingsBalanceChart';
import AnnualIncomeChart from './AnnualIncomeChart';

export default function ChartArea({
  liquidSavings,
  monthlyOutgoings,
  monthlyIncomeGrowth,
  surrenderThreshold,
}) {
  return (
    <div className="chart-area">
      <SavingsBalanceChart
        liquidSavings={liquidSavings}
        monthlyOutgoings={monthlyOutgoings}
        monthlyIncomeGrowth={monthlyIncomeGrowth}
        surrenderThreshold={surrenderThreshold}
      />
      <AnnualIncomeChart monthlyIncomeGrowth={monthlyIncomeGrowth} />
    </div>
  );
}

ChartArea.propTypes = {
  liquidSavings: PropTypes.number,
  monthlyOutgoings: PropTypes.number,
  monthlyIncomeGrowth: PropTypes.number,
  surrenderThreshold: PropTypes.number,
};
