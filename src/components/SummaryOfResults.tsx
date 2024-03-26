import {
  Group,
  NumberFormatter,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import {
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconArrowUpRight,
  IconPigMoney,
  IconMoneybag,
} from '@tabler/icons-react';
import classes from '../styles/SummaryOfResults.module.css';
import CopyValueButton from './CopyValueButton';

const icons = {
  net_profit: IconMoneybag,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
  piggy_bank: IconPigMoney,
};
export interface SummaryDetails {
  summaryInitialInvestmentDate: string;
  summaryPrincipalGrowthDate: string;
  summaryTotalInterval: number;
  summaryInterval: string;
}
export interface SummaryData {
  summaryInitialInvestment: number;
  summaryPrincipalGrowth: number;
  summaryPrincipalGrowthPercentage: number;
  summaryTotalCashOut: number;
  summaryNetProfit: number;
  summaryNetProfitPercentage: number;
  summaryDetails: SummaryDetails;
}
export function SummaryOfResults({
  summaryData,
}: {
  summaryData: SummaryData;
}) {
  const summaryInitialInvestment = `${summaryData.summaryInitialInvestment.toFixed(
    2
  )}`;
  const summaryPrincipalGrowth = `${summaryData.summaryPrincipalGrowth.toFixed(
    2
  )}`;
  const summaryPrincipalGrowthPercentage = `${summaryData.summaryPrincipalGrowthPercentage.toFixed(
    2
  )}`;
  const summaryTotalCashOut = `${summaryData.summaryTotalCashOut.toFixed(2)}`;
  const summaryNetProfit = `${summaryData.summaryNetProfit.toFixed(2)}`;
  const summaryNetProfitPercentage = `${summaryData.summaryNetProfitPercentage.toFixed(
    2
  )}`;

  const summaryInitialInvestmentDate =
    summaryData.summaryDetails.summaryInitialInvestmentDate;
  const summaryPrincipalGrowthDate =
    summaryData.summaryDetails.summaryPrincipalGrowthDate;
  const summaryTotalInterval = summaryData.summaryDetails.summaryTotalInterval;
  const summaryInterval = summaryData.summaryDetails.summaryInterval;
  const summaryInterValDetail =
    summaryInterval === 'Daily'
      ? 'day'
      : summaryInterval === 'Weekly'
      ? 'week'
      : summaryInterval === 'Monthly'
      ? 'month'
      : 'year';

  const data = [
    {
      title: 'Investment',
      icon: 'receipt',
      value: summaryInitialInvestment,
      diff: 0,
      detail: `On ${summaryInitialInvestmentDate}`,
      delay: 0,
    },
    {
      title: 'Principal Growth',
      icon: 'coin',
      value: summaryPrincipalGrowth,
      diff: summaryPrincipalGrowthPercentage,
      detail: `By ${summaryPrincipalGrowthDate}`,
      delay: 250,
    },
    {
      title: 'Cash Withdrawals',
      icon: 'piggy_bank',
      value: summaryTotalCashOut,
      diff: 0,
      detail: `Over the course of ${summaryTotalInterval} ${summaryInterValDetail}s`,
      delay: 500,
    },
    {
      title: 'Net Profit',
      icon: 'net_profit',
      value: summaryNetProfit,
      diff: summaryNetProfitPercentage,
      detail: `Over a ${summaryTotalInterval}-${summaryInterValDetail} period`,
      delay: 750,
    },
  ] as const;

  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon = IconArrowUpRight;
    return (
      <Paper
        withBorder
        shadow='md'
        p='lg'
        radius='md'
        key={stat.title}
      >
        <Group justify='space-between'>
          <Text
            size='xs'
            c='dimmed'
            className={classes.title}
          >
            {stat.title}
          </Text>
          <Icon
            className={classes.icon}
            size='1.4rem'
            stroke={1.5}
          />
        </Group>

        <Group
          align='flex-end'
          gap='xs'
          mt={25}
        >
          <Text
            className={classes.value}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NumberFormatter
              prefix='$ '
              thousandSeparator
              value={stat.value}
            />
            <CopyValueButton value={stat.value} />
            <Text
              c={'teal'}
              fz='sm'
              fw={500}
              className={classes.diff}
              style={{ display: stat.diff === 0 ? 'none' : 'initial' }}
            >
              <span>
                <NumberFormatter
                  suffix=' %'
                  thousandSeparator
                  value={stat.diff}
                />
              </span>
              <DiffIcon
                size='1rem'
                stroke={1.5}
              />
            </Text>
          </Text>
        </Group>

        <Text
          fz='xs'
          c='dimmed'
          mt={7}
        >
          {stat.detail}
        </Text>
      </Paper>
    );
  });
  return (
    <section id='summary-of-results'>
      <Paper m={'xl'}>
        <Title
          order={2}
          mb={'lg'}
        >
          Summary of Results
        </Title>
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
      </Paper>
    </section>
  );
}
