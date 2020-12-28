import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer } from 'recharts';
import SavingsBalanceChart from './SavingsBalanceChart';
import AnnualIncomeChart from './AnnualIncomeChart';

export default function ChartArea({
  liquidSavings,
  monthlyOutgoings,
  monthlyIncomeGrowth,
  surrenderThreshold,
  yearlyIncome,
  monthlyIncome,
}) {
  return (
    <div className="chart-area">
      <ResponsiveContainer width="95%" height={400}>
        <SavingsBalanceChart
          liquidSavings={liquidSavings}
          monthlyOutgoings={monthlyOutgoings}
          monthlyIncomeGrowth={monthlyIncomeGrowth}
          surrenderThreshold={surrenderThreshold}
          yearlyIncome={yearlyIncome}
          monthlyIncome={monthlyIncome}
        />
      </ResponsiveContainer>

      <AnnualIncomeChart
        monthlyIncomeGrowth={monthlyIncomeGrowth}
        yearlyIncome={yearlyIncome}
      />
    </div>
  );
}

ChartArea.propTypes = {
  liquidSavings: PropTypes.number,
  monthlyOutgoings: PropTypes.number,
  monthlyIncomeGrowth: PropTypes.number,
  surrenderThreshold: PropTypes.number,
  yearlyIncome: PropTypes.array,
  monthlyIncome: PropTypes.array,
};
