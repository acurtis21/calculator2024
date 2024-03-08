import { Button, Tooltip } from '@mantine/core';
import { SendIcon } from '../assets/SendIcon';

export const SubmitButton = () => {
  return (
    <>
      <Tooltip
        label='Submit Form'
        withArrow
        multiline
      >
        <Button
          fullWidth
          size='xl'
          type='submit'
          rightSection={
            <SendIcon
              size={24}
              style={{ color: 'white' }}
            />
          }
        >
          Submit
        </Button>
      </Tooltip>
    </>
  );
};
