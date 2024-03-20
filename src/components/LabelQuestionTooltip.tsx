import { Tooltip } from '@mantine/core';
import styles from '../styles/LabelQuestionTooltip.module.css';
import { IconInfoSquareRounded } from '@tabler/icons-react';

export const LabelQuestionTooltip = ({
  label,
  tooltip,
  isRequired,
}: {
  label: string;
  tooltip: string;
  isRequired: boolean;
}) => {
  const labelStyles: React.CSSProperties = {
    display: 'inline-block',
    marginBottom: '5px',
  };

  return (
    <span style={labelStyles}>
      {label}
      {isRequired && <span className={styles.isRequired}>*</span>}
      <Tooltip
        label={tooltip}
        withArrow
        multiline
        w={220}
      >
        <IconInfoSquareRounded
          size='1.25em'
          style={{ marginLeft: '5px' }}
        />
      </Tooltip>
    </span>
  );
};
