import React, {useState} from 'react';
import Grid from "../Grid/grid";
import "./styles.css";

const Form = ({handleAdd, transactionList, setTransactionList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
    const generateId = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateId(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        console.log(transaction)
        handleAdd(transaction);

        setDesc("");
        setAmount("");
    }

    return (
        <div>
            <div className="form-container">
                <div className="input-content">
                    <label htmlFor="desc">Descrição</label>
                    <input
                        type="text"
                        value={desc}
                        className="input"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className="input-content">
                    <label htmlFor="desc">Valor</label>
                    <input
                        type="number"
                        value={amount}
                        className="input"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="radio-group">
                    <input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        className="input"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <label htmlFor="rIncome">Entrada</label>
                    <input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        className="input"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <label htmlFor="rExpenses">Saída</label>
                </div>
                <button className="sbm-button" onClick={handleSave}>Adicionar</button>
            </div>
            <Grid itens={transactionList} setItens={setTransactionList}/>
        </div>
    );
};

export default Form;
