import { NumberInput, Text } from '@mantine/core';
import { LabelQuestionTooltip } from './LabelQuestionTooltip';

export const LengthOfTerm = ({
  lengthOfTermInterval,
  lengthOfTerm,
  setLengthOfTerm,
}: {
  lengthOfTermInterval: string;
  lengthOfTerm: number;
  setLengthOfTerm: (lengthOfTerm: number) => void;
}) => {
  return (
    <>
      <Text
        size='sm'
        mt='lg'
        fw={500}
      >
        <LabelQuestionTooltip
          label={`Length of Term (in ${lengthOfTermInterval})`}
          tooltip={`The number of ${lengthOfTermInterval} the investment is held.`}
          isRequired={true}
        />
      </Text>
      <NumberInput
        placeholder='12'
        min={12}
        max={365}
        value={lengthOfTerm}
        onChange={(value) =>
          typeof value === 'number'
            ? setLengthOfTerm(value)
            : setLengthOfTerm(lengthOfTerm)
        }
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </>
  );
};
