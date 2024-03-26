import { ActionIcon, Tooltip } from '@mantine/core';
import { RefreshIcon } from '../assets/RefreshIcon';

export const ResetButton = ({
  setFormSubmitted,
}: {
  setFormSubmitted: (formSubmitted: boolean) => void;
}) => {
  return (
    <>
      <Tooltip
        label='Reset Form'
        withArrow
        multiline
      >
        <ActionIcon
          variant='default'
          size={'xl'}
          style={{ width: '100%', height: '100%' }}
          onClick={() => {
            setFormSubmitted(false);
          }}
        >
          <RefreshIcon
            // size={'xl'}
            style={{ color: '#212529', width: '24px', height: '24px' }}
          />
        </ActionIcon>
      </Tooltip>
    </>
  );
};
