import { Box, Grid, Text, Title } from '@mantine/core';
import { InvestmentInterval } from './InvestmentInterval';
import { InvestmentAmount } from './InvestmentAmount';
import { InterestRate } from './InterestRate';
import { LengthOfTerm } from './LengthOfTerm';
import { ReInvestRate } from './ReInvestRate';
import { PreferredTradingDays } from './PreferredTradingDays';
import { FormButtonGrid } from './FormButtonGrid';
import { SubmitButton } from './SubmitButton';
import { ResetButton } from './ResetButton';

const captionStyles = { color: '#777' };

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
  setFormSubmitted,
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
  setFormSubmitted: (formSubmitted: boolean) => void;
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
          <FormButtonGrid>
            <Grid.Col span={9}>
              <SubmitButton />
            </Grid.Col>
            <Grid.Col span={3}>
              <ResetButton setFormSubmitted={setFormSubmitted} />
            </Grid.Col>
          </FormButtonGrid>
        </form>
        <Text
          mb={'lg'}
          mt={'lg'}
          size='sm'
          style={captionStyles}
        >
          <small>
            * This calculator is not a financial advisor and is not intended to
            be used as such.
          </small>
        </Text>
        <Text
          size='sm'
          style={captionStyles}
        >
          <small>
            &copy; Copyright {new Date().getFullYear()} by Alexander Curtis
          </small>
        </Text>
      </Box>
    </div>
  );
};
