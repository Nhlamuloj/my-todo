import React, {useState} from "react";
import "../css/add.css"

import{db} from '../components/config/firebase'

import {addDoc, collection} from 'firebase/firestore'
function AddItem(props){

    
    const [item, setItem] = useState("");
    const [transactionType, settransactionType] = useState("");
    
    const add =(()=>{
       
        const collectionRef= collection(db, "transaction");
        
        const transaction ={
            item:item ,
            
            transactionType:transactionType
        };
        addDoc(collectionRef, transaction).then (()=>{
            alert("Added successfully")
        }).catch((error)=>{
            console.log(error);
        })

        props.add( item, transactionType);
    })
    return(
     <div>
         <input placeholder="Enter item"
          onChange={(e)=>setItem(e.target.value)}
         />{" "}
         
         <select onChange={(e)=>settransactionType(e.target.value)}  ><br></br>
             <option hidden>Priority</option>
             <option value="High">High</option><br></br>
             <option value="Medium">Medium</option><br></br>
             <option value="Low">Low</option>
         </select>{" "}
         <button id="btn" onClick={add}>+</button>
     </div>  

    

        
    )
}



export default AddItem