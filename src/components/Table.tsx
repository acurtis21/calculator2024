import {
  Table,
  TableCaption,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  NumberFormatter,
} from '@mantine/core';
import { tableRow } from '../utilities/generateTableData';

export const TableRows = ({
  tableData: tableData,
  interval,
}: {
  tableData: tableRow[];
  interval: string;
}) => {
  const elements = tableData;

  const rows = elements.map((element: tableRow) => (
    <TableTr key={element.day}>
      <TableTd>{element.day}</TableTd>
      <TableTd>{element.date}</TableTd>
      <TableTd>
        <NumberFormatter
          prefix='$ '
          value={element.earnings.toFixed(2)}
          thousandSeparator
        />
      </TableTd>
      <TableTd>{element.reInvestRate}%</TableTd>
      <TableTd>
        <NumberFormatter
          prefix='$ '
          value={element.principal.toFixed(2)}
          thousandSeparator
        />
      </TableTd>
      <TableTd>
        <NumberFormatter
          prefix='$ '
          value={element.cashOut.toFixed(2)}
          thousandSeparator
        />
      </TableTd>
      <TableTd>
        <NumberFormatter
          prefix='$ '
          value={element.totalPrincipal.toFixed(2)}
          thousandSeparator
        />
      </TableTd>
    </TableTr>
  ));
  return (
    <Table
      stickyHeader
      stickyHeaderOffset={60}
      striped
      highlightOnHover
      withColumnBorders
      withRowBorders={false}
    >
      <TableThead>
        <TableTr>
          <TableTh>
            {interval === 'Daily'
              ? 'Day'
              : interval === 'Weekly'
              ? 'Week'
              : interval === 'Monthly'
              ? 'Month'
              : 'Year'}
          </TableTh>
          <TableTh>Date</TableTh>
          <TableTh>Earnings</TableTh>
          <TableTh>Re-Invest Rate</TableTh>
          <TableTh>Principal</TableTh>
          <TableTh>Cash Out</TableTh>
          <TableTh>Total Principal</TableTh>
        </TableTr>
      </TableThead>
      <TableTbody>{rows}</TableTbody>
      <TableCaption>Scroll page to see sticky thead</TableCaption>
    </Table>
  );
};