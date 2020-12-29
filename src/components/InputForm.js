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
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
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
      <h2>Figures</h2>
      <StyledForm>
        <label htmlFor="liquid-savings">
          Liquid Savings
          <input
            name="savings"
            id="liquid-savings"
            type="number"
            value={liquidSavings}
            onChange={updateLiquidSavings}
          />
        </label>
        <label htmlFor="monthly-outgoings">
          Monthly Cash Outflow
          <input
            name="outgoings"
            id="monthly-outgoings"
            type="number"
            value={monthlyOutgoings}
            onChange={updateMonthlyOutgoings}
          />
        </label>
        <label htmlFor="monthly-income-growth">
          Monthly Income Growth
          <input
            name="income"
            id="monthly-income-growth"
            type="number"
            value={monthlyIncomeGrowth}
            onChange={updateMonthlyIncomeGrowth}
          />
        </label>
        <label htmlFor="surrender-threshold">
          Surrender Threshold
          <input
            name="surrender-threshold"
            id="monthly-income-growth"
            type="number"
            value={surrenderThreshold}
            onChange={updateSurrenderThreshold}
          />
        </label>
      </StyledForm>
      <h3>Charts Key</h3>
      <p>
        <strong>
          <span id="blue-span">Blue</span> -{' '}
        </strong>{' '}
        the savings balance with income applied
      </p>
      <p>
        <strong>
          <span id="yellow-span">Yellow</span> -{' '}
        </strong>{' '}
        the savings balance without income applied
      </p>
      <p>
        <strong>
          <span id="red-span">Red</span> -{' '}
        </strong>{' '}
        the surrender threshold
      </p>
      <p>
        <strong>
          <span id="green-span">Green</span> -{' '}
        </strong>{' '}
        the total income in the forward-looking 12 months
      </p>
      <p>
        <strong>Horizontal Axis - </strong>months
      </p>
      <p>
        <strong>Vertical Axis - </strong> amount in your currency
      </p>
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
