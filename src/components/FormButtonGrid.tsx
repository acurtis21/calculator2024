import { Grid } from '@mantine/core';
import { ResetButton } from './ResetButton';
import { SubmitButton } from './SubmitButton';

export const FormButtonGrid = () => {
  return (
    <Grid mt={'xl'}>
      <Grid.Col span={9}>
        <SubmitButton />
      </Grid.Col>
      <Grid.Col span={3}>
        <ResetButton />
      </Grid.Col>
    </Grid>
  );
};
