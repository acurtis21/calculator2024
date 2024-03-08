import { Box, Title } from '@mantine/core';
import { InvestmentInterval } from './InvestmentInterval';
import { InvestmentAmount } from './InvestmentAmount';
import { InterestRate } from './InterestRate';
import { LengthOfTerm } from './LengthOfTerm';
import { ReInvestRate } from './ReInvestRate';
import { PreferredTradingDays } from './PreferredTradingDays';
import { FormButtonGrid } from './FormButtonGrid';

export const Form = ({
  interval,
  setInterval,
  investmentAmount,
  setInvestmentAmount,
  reInvestRate,
  setReInvestRate,
  interestRate,
  setInterestRate,
  lengthOfTerm,
  setLengthOfTerm,
  lengthOfTermInterval,
  preferredTradingDays,
  setPreferredTradingDays,
  handleFormSubmit,
}: {
  interval: string;
  setInterval: (interval: string) => void;
  investmentAmount: number;
  setInvestmentAmount: (investmentAmount: number) => void;
  reInvestRate: number;
  setReInvestRate: (reInvestRate: number) => void;
  interestRate: number;
  setInterestRate: (interestRate: number) => void;
  lengthOfTerm: number;
  setLengthOfTerm: (lengthOfTerm: number) => void;
  lengthOfTermInterval: string;
  preferredTradingDays: string[];
  setPreferredTradingDays: (preferredTradingDays: string[]) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
}) => {
  return (
    <div>
      <Box p={'sm'}>
        <Title order={2}>Calculate {interval} Interest</Title>
        <form
          id='compound-interest-form'
          onSubmit={handleFormSubmit}
        >
          <InvestmentInterval
            interval={interval}
            setInterval={setInterval}
          />
          <InvestmentAmount
            investmentAmount={investmentAmount}
            setInvestmentAmount={setInvestmentAmount}
          />
          <LengthOfTerm
            lengthOfTermInterval={lengthOfTermInterval}
            lengthOfTerm={lengthOfTerm}
            setLengthOfTerm={setLengthOfTerm}
          />
          <InterestRate
            interval={interval}
            interestRate={interestRate}
            setInterestRate={setInterestRate}
          />
          <ReInvestRate
            reInvestRate={reInvestRate}
            setReInvestRate={setReInvestRate}
          />
          {interval === 'Daily' && (
            <PreferredTradingDays
              preferredTradingDays={preferredTradingDays}
              setPreferredTradingDays={setPreferredTradingDays}
            />
          )}
          <FormButtonGrid />
        </form>
      </Box>
    </div>
  );
};
