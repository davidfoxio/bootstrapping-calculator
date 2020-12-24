/* eslint-disable no-plusplus */
import React, { useState } from 'react';
// Components
import ChartArea from './components/ChartArea';
import InputForm from './components/InputForm';

export default function App() {
  const [liquidSavings, setLiquidSavings] = useState(500000);
  const [monthlyOutgoings, setMonthlyOutgoings] = useState(7500);
  const [monthlyIncomeGrowth, setMonthlyIncomeGrowth] = useState(100);
  const [surrenderThreshold, setSurrenderThreshold] = useState(6);

  const monthlyIncome = [];
  const yearlyIncome = [];
  for (let i = 0; i < 133; i++) {
    monthlyIncome.push(i * monthlyIncomeGrowth);
  }
  for (let i = 0; i < 121; i++) {
    yearlyIncome.push(
      monthlyIncome
        .filter((figure, index) => index >= i && index < i + 12)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
    );
  }

  return (
    <div className="App">
      <InputForm
        liquidSavings={liquidSavings}
        setLiquidSavings={setLiquidSavings}
        monthlyOutgoings={monthlyOutgoings}
        setMonthlyOutgoings={setMonthlyOutgoings}
        monthlyIncomeGrowth={monthlyIncomeGrowth}
        setMonthlyIncomeGrowth={setMonthlyIncomeGrowth}
        surrenderThreshold={surrenderThreshold}
        setSurrenderThreshold={setSurrenderThreshold}
      />
      <ChartArea
        liquidSavings={liquidSavings}
        monthlyOutgoings={monthlyOutgoings}
        monthlyIncomeGrowth={monthlyIncomeGrowth}
        surrenderThreshold={surrenderThreshold}
        yearlyIncome={yearlyIncome}
        monthlyIncome={monthlyIncome}
      />
    </div>
  );
}
