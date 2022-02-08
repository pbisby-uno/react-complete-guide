import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020');

  const selectedYearChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={selectedYear}
          onSelectedDateChange={selectedYearChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
