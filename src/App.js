import React, {useState, useEffect} from 'react';
import Header from "./components/Header/header";
import Resume from "./components/Resume/resume";
import Form from "./components/Form/form";
import "./Global.css"
const App = () => {
    const data = localStorage.getItem("transactions");
    const [transactionList, setTransactionList] = useState(data ? JSON.parse(data) : []);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transactionList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`)
        setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`)
        console.log(total)

    }, [transactionList])

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionList, transaction];

        setTransactionList(newArrayTransactions);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
    }

    return (
        <div>
            <Header />
            <Resume income={income} expense={expense} total={total} />
            <Form handleAdd={handleAdd} transactionList={transactionList} setTransactionList={setTransactionList} />
        </div>

    );
};

export default App;
