/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed';
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
  padding-bottom: 50px;
`;

const InputChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  overflow: hidden;
  .input-figures {
    max-width: 300px;
    border-radius: 1em 0 1em 0;
    background-image: linear-gradient(
      -100deg,
      rgba(235, 235, 235, 0.15),
      rgba(235, 235, 235, 0.8) 100%,
      rgba(235, 235, 235, 0.25)
    );
    padding: 1rem;
  }
  .chart-area {
    width: 700px;
    padding-right: 1rem;
    .annualIncomeChart,
    .savingsBalanceChart {
      width: 100%;
      height: 500px;
      margin-bottom: 5rem;
    }
    @media only screen and (max-width: 755px) {
      width: 90%;
    }
  }
  input {
    padding: 0.5rem;
  }
  @media only screen and (max-width: 755px) {
    .input-figures {
      max-width: 500px;
      margin: 1rem;
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
          className="chartArea"
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
          The Bootstrapping Calculator was created by Daniel Vassallo. It is a
          very simple spreadsheet that he used to figure out if he had enough
          savings before taking the plunge to quit his job and live off his
          savings while bootstrapping his own business. It is intentionally very
          simple: There are only 4 parameters, and the only one that requires
          guessing is the income. By tweaking that value, he could get an income
          target to aim for, and was assured that his venture would survive if
          he met it.
        </p>
        <p>
          In this project, I've built the bootstrapping calculator as a web app,
          using React. I'm a fan of Daniel's work and philosophies, so this is
          my homage to him and my way of saying thanks for sharing his story. If
          you're interested in finding out more about Daniel, I'd recommend
          following him on twitter. You can see a feed of his most recent tweets
          below:
        </p>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="dvassallo"
          options={{ height: 500, width: '100%' }}
        />
      </InfoContainer>
      <BackLink href="https://twitter.com/davidfoxio" target="_blank">
        <img src={me} alt="David Fox" /> Made by David Fox
      </BackLink>
    </div>
  );
}
