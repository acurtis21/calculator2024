import { LineChart } from '@mantine/charts';
import { chartData } from '../utilities/generateChartData';

export const SummaryChart = ({ chartData }: { chartData: chartData[] }) => {
  const data = chartData;
  return (
    <LineChart
      h={500}
      data={data}
      dataKey='date'
      // withLegend={true}
      // legendProps={{ verticalAlign: 'top' }}
      // withYAxis
      series={[
        { name: 'earnings', color: 'indigo.6' },
        { name: 'cashOut', color: 'blue.6' },
        { name: 'totalPrincipal', color: 'teal.6' },
      ]}
      curveType='natural'
    />
  );
};
