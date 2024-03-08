import { add, format } from 'date-fns';

export interface tableRow {
  day: number;
  date: string;
  earnings: number;
  reInvestRate: number;
  principal: number;
  cashOut: number;
  totalPrincipal: number;
  interval: string;
}
export const generateTableData = (
  investmentAmount: number,
  reInvestRate: number,
  interestRate: number,
  lengthOfTerm: number,
  interval: string
  // preferredTradingDays
) => {
  const tableBodyData: tableRow[] = [];

  // Loop based on length of term
  for (let i = 0; i < lengthOfTerm; i++) {
    const initialInvestmentAmount: number = investmentAmount;
    const day: number = i + 1;
    const dateInterval: object =
      interval === 'Daily'
        ? { days: i }
        : interval === 'Weekly'
        ? { weeks: i }
        : interval === 'Monthly'
        ? { months: i }
        : { years: i };
    const dateFormat: string =
      interval === 'Daily'
        ? 'EEEE, MMMM d, yyyy'
        : interval === 'Weekly'
        ? 'MMMM d, yyyy'
        : interval === 'Monthly'
        ? 'MMMM yyyy'
        : 'yyyy';

    const date: string = format(add(new Date(), dateInterval), dateFormat);

    const interestDecimal: number = interestRate / 100;
    const previousTotalPrincipal =
      i === 0
        ? initialInvestmentAmount * interestDecimal
        : tableBodyData[i - 1].totalPrincipal;
    const earnings: number =
      i === 0
        ? initialInvestmentAmount * interestDecimal
        : previousTotalPrincipal * interestDecimal;
    const reInvestDecimal: number = reInvestRate / 100;
    const cashOut =
      interestRate === 0 ? earnings : earnings - earnings * reInvestDecimal;
    const principal: number = earnings - cashOut;
    const totalPrincipal: number =
      i === 0
        ? initialInvestmentAmount + principal
        : principal + previousTotalPrincipal;

    const currentIntervalData: tableRow = {
      day,
      date,
      earnings,
      reInvestRate,
      principal,
      cashOut,
      totalPrincipal,
      interval,
    };
    tableBodyData.push(currentIntervalData);
  }

  return tableBodyData;
};
