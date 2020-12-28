import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

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
    setLiquidSavings(parseInt(e.target.value));
  };

  const updateMonthlyOutgoings = (e) => {
    setMonthlyOutgoings(parseInt(e.target.value));
  };

  const updateMonthlyIncomeGrowth = (e) => {
    setMonthlyIncomeGrowth(parseInt(e.target.value));
  };

  const updateSurrenderThreshold = (e) => {
    setSurrenderThreshold(parseInt(e.target.value));
  };

  return (
    <div className="input-figures">
      <h2>Figures</h2>
      <StyledForm>
        <label htmlFor="liquid-savings">
          Liquid Savings
          <input
            name="savings"
            id="liquid-savings"
            type="text"
            value={liquidSavings}
            onChange={updateLiquidSavings}
          />
        </label>
        <label htmlFor="monthly-outgoings">
          Monthly Cash Outflow
          <input
            name="outgoings"
            id="monthly-outgoings"
            type="text"
            value={monthlyOutgoings}
            onChange={updateMonthlyOutgoings}
          />
        </label>
        <label htmlFor="monthly-income-growth">
          Monthly Income Growth
          <input
            name="income"
            id="monthly-income-growth"
            type="text"
            value={monthlyIncomeGrowth}
            onChange={updateMonthlyIncomeGrowth}
          />
        </label>
        <label htmlFor="surrender-threshold">
          Surrender Threshold
          <input
            name="surrender-threshold"
            id="monthly-income-growth"
            type="text"
            value={surrenderThreshold}
            onChange={updateSurrenderThreshold}
          />
        </label>
      </StyledForm>
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
