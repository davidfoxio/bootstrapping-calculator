import React from 'react';
import PropTypes from 'prop-types';

export default function InputForm({
  liquidSavings,
  setLiquidSavings,
  monthlyOutgoings,
  setMonthlyOutgoings,
  monthlyIncomeGrowth,
  setMonthlyIncomeGrowth,
  surrenderThreshold,
  setSurrenderThreshold,
}) {
  const updateLiquidSavings = (e) => {
    setLiquidSavings(e.target.value);
  };

  const updateMonthlyOutgoings = (e) => {
    setMonthlyOutgoings(e.target.value);
  };

  const updateMonthlyIncomeGrowth = (e) => {
    setMonthlyIncomeGrowth(e.target.value);
  };

  const updateSurrenderThreshold = (e) => {
    setSurrenderThreshold(e.target.value);
  };

  return (
    <div className="input-figures">
      <form>
        <label htmlFor="liquid-savings">
          Liquid Savings
          <input
            id="liquid-savings"
            type="number"
            value={liquidSavings}
            onChange={updateLiquidSavings}
          />
        </label>
        <label htmlFor="monthly-outgoings">
          Monthly Cash Outflow
          <input
            id="monthly-outgoings"
            type="number"
            value={monthlyOutgoings}
            onChange={updateMonthlyOutgoings}
          />
        </label>
        <label htmlFor="monthly-income-growth">
          Monthly Income Growth
          <input
            id="monthly-income-growth"
            type="number"
            value={monthlyIncomeGrowth}
            onChange={updateMonthlyIncomeGrowth}
          />
        </label>
        <label htmlFor="surrender-threshold">
          Surrender Threshold
          <input
            id="monthly-income-growth"
            type="number"
            value={surrenderThreshold}
            onChange={updateSurrenderThreshold}
          />
        </label>
      </form>
    </div>
  );
}

InputForm.propTypes = {
  liquidSavings: PropTypes.number,
  setLiquidSavings: PropTypes.func,
  monthlyOutgoings: PropTypes.number,
  setMonthlyOutgoings: PropTypes.func,
  monthlyIncomeGrowth: PropTypes.number,
  setMonthlyIncomeGrowth: PropTypes.func,
  surrenderThreshold: PropTypes.number,
  setSurrenderThreshold: PropTypes.func,
};
