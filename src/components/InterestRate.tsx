import { Slider, Text } from '@mantine/core';
import { LabelQuestionTooltip } from './LabelQuestionTooltip';

export const InterestRate = ({
  interval,
  interestRate,
  setInterestRate,
}: {
  interval: string;
  interestRate: number;
  setInterestRate: (interestRate: number) => void;
}) => {
  return (
    <>
      <Text
        size='sm'
        mt='lg'
        fw={500}
      >
        <LabelQuestionTooltip
          label={`${interval} Interest Rate (%)`}
          tooltip={`The ${interval} interest rate applied to your investment.`}
          isRequired={true}
        />
      </Text>
      <Slider
        label={(value) => `${value}%`}
        color='blue'
        defaultValue={interestRate}
        value={interestRate}
        onChange={setInterestRate}
        min={0.5}
        max={20}
        step={0.5}
        marks={[
          { value: 0.5, label: '0.5%' },
          { value: 5, label: '5%' },
          { value: 10, label: '10%' },
          { value: 15, label: '15%' },
          { value: 20, label: '20%' },
        ]}
      />
    </>
  );
};
