import React, { useState } from 'react';
// Components
import ChartArea from './components/ChartArea';
import InputForm from './components/InputForm';

export default function App() {
  const [liquidSavings, setLiquidSavings] = useState(0);
  const [monthlyOutgoings, setMonthlyOutgoings] = useState(0);
  const [monthlyIncomeGrowth, setMonthlyIncomeGrowth] = useState(0);
  const [surrenderThreshold, setSurrenderThreshold] = useState(0);

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
      />
    </div>
  );
}
