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

const NotesContainer = styled.div`
  padding: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const InfoContainer = styled.div`
  padding: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
`;

const InputChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-self: flex-start;
  padding: 1rem;
  .input-figures {
    max-width: 300px;
  }
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
      <NotesContainer>
        <h2>Notes</h2>
        <p>
          <strong>Liquid Savings - </strong>
          The total amount of money you can access. If some of this money
          becomes taxable when accessed, subtract the tax from it. If you
          include retirement funds, also subtract any early withdrawal fees.
        </p>
        <p>
          <strong>Monthly Cash Outflow - </strong>
          The average monthly outflows from your bank account. This includes all
          personal expenses and any other payment obligations, such as loan
          payments. If you receive any fixed income from investments or rent,
          subtract it from the outflow.
        </p>
        <p>
          <strong>Monthly Income Growth - </strong>
          The amount of new income you expect to add each month from your
          bootstrapped activities.
        </p>
        <p>
          <strong>Surrender Threshold - </strong>
          The number of months of covered expenses at which point the venture
          gets abandoned. Use this threshold to ensure that you can fall back to
          an alternative way of making ends meet, such as getting back on the
          job market.
        </p>
      </NotesContainer>
      <InfoContainer>
        <h2>About the Bootstrapping Calculator</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam ab
          quidem neque placeat quos consectetur reprehenderit labore, accusamus
          minima iure voluptatem maiores ut quasi illo numquam error dolore
          odit? Ad temporibus sit autem veniam atque adipisci voluptatem
          quibusdam. Ratione necessitatibus expedita dicta consequuntur
          recusandae at, obcaecati neque quia esse consectetur? Itaque hic, unde
          fuga laborum sit id omnis ipsam. Consectetur blanditiis ipsum placeat
          aperiam omnis nisi sapiente tempora culpa obcaecati adipisci, velit
          saepe nihil est soluta, molestias nobis maxime impedit animi tenetur
          ratione esse distinctio. Expedita harum suscipit ullam? Ab dolorum
          velit, omnis cupiditate maiores sapiente labore! Iusto ut facilis
          quidem commodi labore rem delectus at, itaque nesciunt, praesentium
          modi veniam quibusdam provident eum veritatis voluptate doloribus
          placeat voluptatibus. Est accusamus repellendus praesentium placeat
          expedita esse autem ducimus voluptas omnis molestias beatae,
          voluptatum hic temporibus laborum architecto nam molestiae animi. A
          quos aperiam est error et blanditiis expedita! Voluptatibus.
        </p>
      </InfoContainer>
      <BackLink href="https://twitter.com/davidfoxio" target="_blank">
        <img src={me} alt="David Fox" /> Made by David Fox
      </BackLink>
    </div>
  );
}
