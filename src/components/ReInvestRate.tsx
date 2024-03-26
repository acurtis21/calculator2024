import {
  Divider,
  Fieldset,
  Grid,
  NumberInput,
  Slider,
  Text,
} from '@mantine/core';
import { LabelQuestionTooltip } from './LabelQuestionTooltip';
import { FormFieldOptions } from './FormFieldOptions';
import { IconTargetArrow } from '@tabler/icons-react';

export const ReInvestRate = ({
  reInvestRate,
  setReInvestRate,
  reInvestTypeValue,
  setreInvestTypeValue,
}: {
  reInvestRate: number;
  setReInvestRate: (reInvestRate: number) => void;
  reInvestTypeValue: string;
  setreInvestTypeValue: (interestTypeValue: string) => void;
}) => {
  const toolTipLabel =
    'Change Re-Invest calculation method (Fixed or Variable)';
  const iconLabel = 'Interest Type';
  const menuItems = ['fixed', 'variable', 'goal-based'];
  return (
    <>
      {reInvestTypeValue === 'goal-based' ? (
        <>
          <Fieldset
            mt={'xl'}
            legend={<IconTargetArrow size={20} />}
          >
            <Text
              size='sm'
              fw={500}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <LabelQuestionTooltip
                label={`Re-Invest Rate (${
                  reInvestTypeValue === 'goal-based'
                    ? 'initial'
                    : reInvestTypeValue
                } %)`}
                tooltip='The percentage of interest earned that is re-invested back into the investment.'
                isRequired={true}
              />
              {/* Options Button */}
              <FormFieldOptions
                toolTipLabel={toolTipLabel}
                iconLabel={iconLabel}
                menuItems={menuItems}
                value={reInvestTypeValue}
                setValue={setreInvestTypeValue}
              />
              {/* Goal based re-investment percentage */}
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
            <Divider
              mt={'xl'}
              mb={'sm'}
            />
            <Grid>
              <Grid.Col span={6}>
                <NumberInput
                  min={100}
                  defaultValue={10000}
                  leftSection='$'
                  thousandSeparator=','
                  stepHoldDelay={500}
                  stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
                  label={
                    <LabelQuestionTooltip
                      label='Investment Goal'
                      tooltip='The goal you want to reach before changing the re-investment rate.'
                      isRequired={true}
                    />
                  }
                  placeholder='10000'
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <NumberInput
                  max={100}
                  min={0}
                  defaultValue={50}
                  leftSection='%'
                  thousandSeparator=','
                  stepHoldDelay={500}
                  stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
                  label={
                    <LabelQuestionTooltip
                      label='Rate after Goal'
                      tooltip='The goal you want to reach before changing the re-investment rate.'
                      isRequired={true}
                    />
                  }
                  placeholder='10000'
                />
              </Grid.Col>
            </Grid>
          </Fieldset>
        </>
      ) : (
        <>
          <Text
            size='sm'
            mt='xl'
            fw={500}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <LabelQuestionTooltip
              label={`Re-Invest Rate (${
                reInvestTypeValue === 'goal-based'
                  ? 'initial'
                  : reInvestTypeValue
              } %)`}
              tooltip='The percentage of interest earned that is re-invested back into the investment.'
              isRequired={true}
            />
            {/* Options Button */}
            <FormFieldOptions
              toolTipLabel={toolTipLabel}
              iconLabel={iconLabel}
              menuItems={menuItems}
              value={reInvestTypeValue}
              setValue={setreInvestTypeValue}
            />
            {/* Goal based re-investment percentage */}
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
      )}
    </>
  );
};
