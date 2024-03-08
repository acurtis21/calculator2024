import { tableRow } from './generateTableData';
export interface chartData {
  date: string;
  earnings: number;
  cashOut: number;
  totalPrincipal: number;
}

export const generateChartData = (
  lengthOfTerm: number,
  tableBodyData: tableRow[]
) => {
  const chartData: chartData[] = [];
  for (let i = 0; i < lengthOfTerm; i++) {
    const chartDate = tableBodyData[i].date;
    const chartEarnings = tableBodyData[i].earnings;
    const chartCashOut = tableBodyData[i].cashOut;
    const chartTotalPrincipal = tableBodyData[i].totalPrincipal;
    const chartRowData: chartData = {
      date: chartDate,
      earnings: chartEarnings,
      cashOut: chartCashOut,
      totalPrincipal: chartTotalPrincipal,
    };

    chartData.push(chartRowData);
  }
  return chartData;
};
