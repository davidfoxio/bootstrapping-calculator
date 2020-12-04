import React, { useState } from 'react';
import InputForm from './components/InputForm';

export default function App() {
  const [liquidSavings, setLiquidSavings] = useState(0);
  const [monthlyOutgoings, setMonthlyOutgoings] = useState('');
  const [monthlyIncomeGrowth, setMonthlyIncomeGrowth] = useState('');
  const [surrenderThreshold, setSurrenderThreshold] = useState('');

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
    </div>
  );
}
