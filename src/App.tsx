import '@mantine/core/styles.css';
import { AppShell, Burger, Grid, Group, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Form } from './components/Form';
import { useState } from 'react';
import { tableRow, generateTableData } from './utilities/generateTableData';
import { TableRows } from './components/Table';
import { generateChartData, chartData } from './utilities/generateChartData';
import { SummaryData, SummaryOfResults } from './components/SummaryOfResults';
import { SummaryChart } from './components/SummaryChart';

function App() {
  const [opened, { toggle }] = useDisclosure();
  const [interval, setInterval] = useState('Daily');
  const [investmentAmount, setInvestmentAmount] = useState(1000);
  const [reInvestRate, setReInvestRate] = useState(95);
  const [interestRate, setInterestRate] = useState(5);
  const [lengthOfTerm, setLengthOfTerm] = useState(12);
  const [preferredTradingDays, setPreferredTradingDays] = useState([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
  ]);
  const lengthOfTermInterval =
    interval === 'Daily'
      ? 'days'
      : interval === 'Weekly'
      ? 'weeks'
      : interval === 'Monthly'
      ? 'months'
      : interval === 'Yearly'
      ? 'years'
      : '';
  const [tableData, setTableData] = useState<tableRow[]>([]);
  const [chartData, setChartData] = useState<chartData[]>([]);
  const [summaryData, setSummaryData] = useState<SummaryData | null>(null);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tableBodyData = generateTableData(
      investmentAmount,
      reInvestRate,
      interestRate,
      lengthOfTerm,
      interval
    );

    setTableData(tableBodyData);

    const chartBodyData = generateChartData(lengthOfTerm, tableBodyData);
    setChartData(chartBodyData);

    const lastRow = tableBodyData.length - 1;

    const summaryInitialInvestment = investmentAmount;
    const summaryPrincipalGrowth = tableBodyData[lastRow].totalPrincipal;
    const summaryPrincipalGrowthPercentage =
      ((summaryPrincipalGrowth - summaryInitialInvestment) /
        summaryInitialInvestment) *
      100;
    const summaryTotalCashOut = tableBodyData.reduce(
      (accumulator, current) => accumulator + current.cashOut,
      0
    );
    const summaryNetProfit = summaryPrincipalGrowth - summaryInitialInvestment;
    const summaryNetProfitPercentage =
      ((summaryNetProfit - summaryInitialInvestment) /
        summaryInitialInvestment) *
      100;

    const summaryInitialInvestmentDate = tableBodyData[0].date;
    const summaryPrincipalGrowthDate = tableBodyData[lastRow].date;
    const summaryTotalInterval = lengthOfTerm;
    const summaryInterval = interval;

    const summaryOfResults = {
      summaryInitialInvestment,
      summaryPrincipalGrowth,
      summaryPrincipalGrowthPercentage,
      summaryTotalCashOut,
      summaryNetProfit,
      summaryNetProfitPercentage,
      summaryDetails: {
        summaryInitialInvestmentDate,
        summaryPrincipalGrowthDate,
        summaryTotalInterval,
        summaryInterval,
      },
    };
    setSummaryData(summaryOfResults);
  };

  const formProps = {
    interval,
    setInterval,
    investmentAmount,
    setInvestmentAmount,
    reInvestRate,
    setReInvestRate,
    interestRate,
    setInterestRate,
    lengthOfTerm,
    setLengthOfTerm,
    lengthOfTermInterval,
    preferredTradingDays,
    setPreferredTradingDays,
    handleFormSubmit,
  };

  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 400,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding='md'
      >
        <AppShell.Header>
          <Group
            h='100%'
            px='md'
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom='sm'
              size='sm'
            />
            {/* <MantineLogo size={30} /> */}
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p='md'>
          <Form {...formProps} />
        </AppShell.Navbar>
        <AppShell.Main>
          <Grid gutter='xl'>
            {summaryData && tableData && (
              <Grid.Col span={12}>
                <SummaryOfResults summaryData={summaryData} />
              </Grid.Col>
            )}
            {false && (
              <Grid.Col span={6}>
                <SummaryChart chartData={chartData} />
              </Grid.Col>
            )}
          </Grid>

          {summaryData && tableData && (
            <TableRows
              tableData={tableData}
              interval={interval}
            />
          )}
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
