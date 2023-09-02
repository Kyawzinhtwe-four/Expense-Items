import ExpenseList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("SelectYear");
  const filterChangeHandler = (filterYearVal) => {
    setFilterYear(filterYearVal);
  };

  const allExpensesItem = [...props.items];

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseFilter
        onChangeFilter={filterChangeHandler}
        selected={filterYear}
      />
      {filterYear === "SelectYear" ? (
        <ul className="expenses-list">
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
      ) : (
        <ExpenseList items={filteredExpenses} />
      )}
      ;
    </>
  );
};
export default Expenses;
