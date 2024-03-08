import { NumberInput } from '@mantine/core';
import { LabelQuestionTooltip } from './LabelQuestionTooltip';

export const InvestmentAmount = ({
  investmentAmount,
  setInvestmentAmount,
}: {
  investmentAmount: number;
  setInvestmentAmount: (investmentAmount: number) => void;
}) => {
  return (
    <>
      <NumberInput
        defaultValue={investmentAmount}
        value={investmentAmount}
        onChange={(value) =>
          typeof value === 'number'
            ? setInvestmentAmount(value)
            : setInvestmentAmount(investmentAmount)
        }
        mt={'md'}
        leftSection='$'
        thousandSeparator=','
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
        label={
          <LabelQuestionTooltip
            label='Investment Amount'
            tooltip='The initial amount of money you plan to invest.'
            isRequired={true}
          />
        }
        placeholder='100'
      />
    </>
  );
};
