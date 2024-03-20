import { MultiSelect, Text } from '@mantine/core';
import { LabelQuestionTooltip } from './LabelQuestionTooltip';
// import styles from '../styles/PreferredTradingDays.module.css';

export const PreferredTradingDays = ({
  preferredTradingDays,
  setPreferredTradingDays,
}: {
  preferredTradingDays: string[];
  setPreferredTradingDays: (preferredTradingDays: string[]) => void;
}) => {
  return (
    <>
      <Text
        size='sm'
        mt='xl'
        fw={500}
      >
        <LabelQuestionTooltip
          label={`Preferred Trading Days`}
          tooltip='Days when you prefer to make investments, which could impact the calculation if investments are made on a rolling basis.'
          isRequired={true}
        />
      </Text>
      <MultiSelect
        placeholder='Pick your trading days'
        hidePickedOptions
        comboboxProps={{ shadow: 'md' }}
        // classNames={{ pill: styles.pill }}
        data={[
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ]}
        defaultValue={preferredTradingDays}
        value={preferredTradingDays}
        onChange={setPreferredTradingDays}
      />
    </>
  );
};
