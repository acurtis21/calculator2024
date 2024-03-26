import { Slider, Text } from '@mantine/core';
import { LabelQuestionTooltip } from './LabelQuestionTooltip';
import { FormFieldOptions } from './FormFieldOptions';

export const InterestRate = ({
  interval,
  interestRate,
  setInterestRate,
  interestTypeValue,
  setInterestTypeValue,
}: {
  interval: string;
  interestRate: number;
  setInterestRate: (interestRate: number) => void;
  interestTypeValue: string;
  setInterestTypeValue: (interestTypeValue: string) => void;
}) => {
  const toolTipLabel = 'Change Interest calculation method (Fixed or Variable)';
  const iconLabel = 'Interest Type';
  const menuItems = ['fixed', 'variable'];
  const minValue = interestTypeValue === 'fixed' ? 0.5 : 2;
  return (
    <>
      <Text
        size='sm'
        mt='lg'
        fw={500}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <LabelQuestionTooltip
          label={`${interval} Interest Rate (${interestTypeValue} %)`}
          tooltip={`The ${interval} interest rate applied to your investment.`}
          isRequired={true}
        />
        {/* Options Button */}
        <FormFieldOptions
          toolTipLabel={toolTipLabel}
          iconLabel={iconLabel}
          menuItems={menuItems}
          value={interestTypeValue}
          setValue={setInterestTypeValue}
        />
      </Text>

      <Slider
        label={(value) => `${value}%`}
        color='blue'
        value={interestRate}
        onChange={setInterestRate}
        min={minValue}
        max={20}
        step={0.5}
        marks={[
          { value: minValue, label: `${minValue}%` },
          { value: 5, label: '5%' },
          { value: 10, label: '10%' },
          { value: 15, label: '15%' },
          { value: 20, label: '20%' },
        ]}
      />
    </>
  );
};
