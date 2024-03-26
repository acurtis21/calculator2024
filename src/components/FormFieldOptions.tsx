import {
  IconDotsVertical,
  IconPercentage,
  IconTargetArrow,
} from '@tabler/icons-react';
import { ActionIcon, Tooltip, Menu } from '@mantine/core';

export function FormFieldOptions({
  toolTipLabel,
  iconLabel,
  menuItems,
  value,
  setValue,
}: {
  toolTipLabel: string;
  iconLabel: string;
  menuItems: string[];
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <Menu
      transitionProps={{ transition: 'pop-bottom-right' }}
      openDelay={250}
      closeDelay={250}
      position='top-end'
      trigger='click'
    >
      <Menu.Target>
        <Tooltip
          label={toolTipLabel}
          withArrow
          multiline
          position='right'
          w={220}
        >
          <ActionIcon
            variant='white'
            color='rgba(84, 84, 84, 1)'
            aria-label={iconLabel}
            size={'sm'}
          >
            <IconDotsVertical size={16} />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown>
        {menuItems.map((item: string, index: number) => {
          const lastDivider = menuItems.length !== index + 1;

          return (
            <>
              <Menu.Item
                key={item}
                value={item}
                defaultValue={menuItems[0]}
                variant='outline'
                // disabled={value === item}
                style={
                  value === item
                    ? {
                        textTransform: 'capitalize',
                        backgroundColor: '#228be6',
                        color: 'white',
                      }
                    : { textTransform: 'capitalize' }
                }
                onClick={() => setValue(item)}
                leftSection={
                  item === 'goal-based' ? (
                    <IconTargetArrow size={20} />
                  ) : (
                    <IconPercentage size={20} />
                  )
                }
              >
                {item}
              </Menu.Item>
              {lastDivider && <Menu.Divider key={`divider-${item}`} />}
            </>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}
