import { useState } from "react";

import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const selectedYearChangeHandler = (newSelectedYear) => {
    setSelectedYear(newSelectedYear);
  };

  const filteredItems = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectedYearChange={selectedYearChangeHandler}
        />
        <ExpensesChart filteredItems={filteredItems} />
        <ExpensesList filteredItems={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
