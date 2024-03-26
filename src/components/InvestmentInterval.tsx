import { SegmentedControl, Text } from '@mantine/core';
import { LabelQuestionTooltip } from './LabelQuestionTooltip';

export const InvestmentInterval = ({
  interval,
  setInterval,
}: {
  interval: string;
  setInterval: (interval: string) => void;
}) => {
  return (
    <>
      <Text
        size='sm'
        mt='lg'
        fw={500}
      >
        <LabelQuestionTooltip
          label='Investment Interval'
          tooltip='The frequency at which you make investments.'
          isRequired={true}
        />
      </Text>
      <SegmentedControl
        fullWidth
        color='blue'
        defaultValue={interval}
        value={interval}
        onChange={setInterval}
        data={['Daily', 'Weekly', 'Monthly', 'Yearly']}
        transitionDuration={250}
      />
    </>
  );
};
