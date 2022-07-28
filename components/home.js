

import AddItem from "./addItem";
import DisplayTransaction from "./displayTransaction";
import React, { useEffect, useState } from "react";
import {BudgetBalance} from './balance'
import { arrayRemove } from "firebase/firestore";


function Home (props){

    const[expense, setExpense]= useState(0);
    const[income, setIncome]= useState(0);

    useEffect(()=>{

        let expense= 0;
        let income = 0;

        for (let index = 0; index<props.list.length;index++){
            if(props.list[index].transactionType =="Expense" ){
               expense= expense+parseInt(props.list[index].amount);
            }else
            income= income+parseInt(props.list[index].amount)
        }
        setIncome(income)
        setExpense(expense)
    },[props.list.length])
    return(
        <div className="container">
            <BudgetBalance  expanse = {expense} income = {income}/>
            <DisplayTransaction list={props.list}/>
            <AddItem add={props.add} />
        </div>
    )
}
export default Home;