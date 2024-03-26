import '@mantine/core/styles.css';
import {
  AppShell,
  Burger,
  Grid,
  Group,
  MantineProvider,
  Paper,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Form } from './components/Form';
import { useState } from 'react';
import { tableRow, generateTableData } from './utilities/generateTableData';
import { TableRows } from './components/Table';
import { generateChartData, chartData } from './utilities/generateChartData';
import { SummaryData, SummaryOfResults } from './components/SummaryOfResults';
import { SummaryChart } from './components/SummaryChart';
import { IconForms } from '@tabler/icons-react';

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
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    console.log(tableBodyData);
    const chartBodyData = generateChartData(lengthOfTerm, tableBodyData);
    setChartData(chartBodyData);

    const summaryOfResults = {
      summaryInitialInvestment: investmentAmount,
      summaryPrincipalGrowth:
        tableBodyData[tableBodyData.length - 1].totalPrincipal,
      summaryPrincipalGrowthPercentage:
        ((tableBodyData[tableBodyData.length - 1].totalPrincipal -
          investmentAmount) /
          investmentAmount) *
        100,
      summaryTotalCashOut: tableBodyData.reduce(
        (accumulator, current) => accumulator + current.cashOut,
        0
      ),
      summaryNetProfit:
        tableBodyData[tableBodyData.length - 1].totalPrincipal -
        investmentAmount,
      summaryNetProfitPercentage:
        ((tableBodyData[tableBodyData.length - 1].totalPrincipal -
          investmentAmount) /
          investmentAmount) *
        100,
      summaryDetails: {
        summaryInitialInvestmentDate: tableBodyData[0].date,
        summaryPrincipalGrowthDate:
          tableBodyData[tableBodyData.length - 1].date,
        summaryTotalInterval: lengthOfTerm,
        summaryInterval: interval,
      },
    };
    setSummaryData(summaryOfResults);
    setFormSubmitted(true);
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
    setFormSubmitted,
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
            <IconForms style={{ marginLeft: '10px' }} />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p='md'>
          <Form {...formProps} />
        </AppShell.Navbar>
        <AppShell.Main>
          <Title
            ml={'xl'}
            mr={'xl'}
            order={1}
          >
            Compound Interest Calculator
          </Title>
          <Grid gutter='xl'>
            {!formSubmitted && (
              <Grid.Col span={12}>
                <section>
                  <Paper
                    shadow='md'
                    withBorder
                    radius='md'
                    m={'xl'}
                    p={'lg'}
                  >
                    <p>Submit form to see results</p>
                  </Paper>
                </section>
              </Grid.Col>
            )}
            {formSubmitted && summaryData && (
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

          {formSubmitted && tableData && (
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
