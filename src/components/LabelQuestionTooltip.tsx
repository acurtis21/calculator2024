import { Tooltip } from '@mantine/core';
import styles from '../styles/LabelQuestionTooltip.module.css';

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
  const questionToolTipStyles: React.CSSProperties = {
    display: 'inline-block',
    color: 'white',
    padding: '0px',
    borderRadius: '50%',
    backgroundColor: '#212529',
    width: '17px',
    height: '17px',
    textAlign: 'center',
    alignContent: 'center',
    fontSize: '85%',
    cursor: 'pointer',
    marginLeft: '5px',
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
        <span style={questionToolTipStyles}>?</span>
      </Tooltip>
    </span>
  );
};
