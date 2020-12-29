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
      <h3>Key</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non
        recusandae voluptas iste? Velit consequatur aspernatur iusto rerum,
        possimus veritatis vero nihil nesciunt officiis sapiente error laborum
        labore ab perferendis. At nulla fugit cumque veritatis dolorum ab
        consectetur unde incidunt. Cumque, asperiores quaerat? Sed, aliquam sit
        esse totam molestiae perferendis ut pariatur asperiores adipisci natus
        quas id numquam a ab? Culpa repellat exercitationem necessitatibus!
        Incidunt accusamus odit porro molestias blanditiis architecto unde sit
        adipisci aspernatur nihil eum distinctio rem, non obcaecati ut,
        excepturi repellat repudiandae veritatis, consequuntur earum.
        Praesentium, sint? Aut eaque eum ullam quod accusamus mollitia eos
        numquam tenetur amet itaque, ex enim ipsum labore, maxime cum maiores ea
        porro deserunt tempore? Iure voluptatum, esse voluptate aut cum velit.
        Praesentium debitis, doloremque, earum delectus animi nemo tempore quod
        ipsam explicabo, impedit consequuntur! Quod est aperiam dolorem fugit
        praesentium dolor aliquam, modi repellat soluta facilis voluptatibus
        numquam, eveniet autem at.
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
