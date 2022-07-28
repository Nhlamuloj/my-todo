
import './App.css';

import React,{useState,u} from 'react';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import{BrowserRouter as Router , Switch ,Route} from 'react-router-dom';

function App() {

  const [transaction, setTransaction] = useState ([]);
  

  const addTransaction = (( item, transactionType)=>{

    setTransaction ((items)=>[...items,{
      
      item:item,
      transactionType:transactionType,
    }])
  })
  console.log(transaction);

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/home">
        <Home list ={transaction} add ={addTransaction}/>
        </Route>
      </Switch>
     
    </Router>


    
  );
}

export default App;
