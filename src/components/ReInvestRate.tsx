import { Slider, Text } from '@mantine/core';
import { LabelQuestionTooltip } from './LabelQuestionTooltip';

export const ReInvestRate = ({
  reInvestRate,
  setReInvestRate,
}: {
  reInvestRate: number;
  setReInvestRate: (reInvestRate: number) => void;
}) => {
  return (
    <>
      <Text
        size='sm'
        mt='xl'
        fw={500}
      >
        <LabelQuestionTooltip
          label={`Re-Invest Rate (%)`}
          tooltip='The percentage of interest earned that is re-invested back into the investment.'
          isRequired={true}
        />
      </Text>
      <Slider
        // labelAlwaysOn
        label={(value) => `${value}%`}
        color='blue'
        defaultValue={reInvestRate}
        value={reInvestRate}
        onChange={setReInvestRate}
        marks={[
          { value: 0, label: '0%' },
          { value: 25, label: '25%' },
          { value: 50, label: '50%' },
          { value: 75, label: '75%' },
          { value: 100, label: '100%' },
        ]}
      />
    </>
  );
};
