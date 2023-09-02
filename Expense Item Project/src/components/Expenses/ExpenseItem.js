import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div>
          <ExpenseTitle title={props.title} />
          <ExpenseAmount amount={props.amount} />
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
