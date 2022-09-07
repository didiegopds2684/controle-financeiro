import React from 'react';
import "./styles.css";
import GridItem from "../GridItem/gridItem";

const Grid = ({ itens, setItens }) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    }

    return (
        <div>
            <table className="grid-table">
                <thead>
                    <tr>
                        <th width="40%">Descrição</th>
                        <th width="40%">Valor</th>
                        <th width="10%">Tipo</th>
                        <th width="10%">#</th>
                    </tr>
                </thead>
                <tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Grid;
