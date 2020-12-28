/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import styled from 'styled-components';
// Components
import ChartArea from './components/ChartArea';
import InputForm from './components/InputForm';
// Assets
import '@csstools/normalize.css';
import GlobalStyles from './styles/GlobalStyles';
import me from './assets/me.png';

const InputChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 1rem;
  margin-bottom: 5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-self: flex-start;
  input {
    padding: 0.5rem;
  }
  @media only screen and (max-width: 755px) {
    .input-figures {
      width: 100%;
      max-width: 500px;
    }
  }
`;

const BackLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Helvetica Neue', sans-serif;
  position: fixed;
  bottom: 0;
  right: 0;
  border-top: #efefef solid 1px;
  border-left: #efefef solid 1px;
  border-radius: 5px 0px 0px 0px;
  padding: 6px;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 10;
  text-decoration: none;
  color: #6f6f6f;
  padding-right: 20px;
  background-color: #ffffff;
  img {
    height: 25px;
    width: 25px;
    margin-right: 6px;
  }
  :hover {
    color: #d6a657;
  }
`;

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
      <GlobalStyles />
      <h1>Bootstrapping Calculator</h1>
      <InputChartContainer>
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
      </InputChartContainer>
      <BackLink href="http://davidfox.io" target="_blank">
        <img src={me} alt="David Fox" /> Made by David Fox
      </BackLink>
    </div>
  );
}
