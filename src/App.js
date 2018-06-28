import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Income from './Components/Income';
import Expense from './Components/Expense';
import Main from './Components/Main';
import Footer from './Components/Footer';


class App extends Component {
  
    constructor(props){
      super(props);
       this.state = {
         description:'',
         amount:'',
         accountType: "income",
         income: [],
         expense: []        
    }

       this.handleChangeDescription = this.handleChangeDescription.bind(this);
       this.handleChangeAmount = this.handleChangeAmount.bind(this);
       this.handleSelectChange = this.handleSelectChange.bind(this);
       this.handleAdd = this.handleAdd.bind(this);
       this.displayDateTime = this.displayDateTime.bind(this);
    }

    handleChangeDescription(e) {
      this.setState ({description: e.target.value});
    }

     handleChangeAmount(e){
      this.setState ({amount: e.target.value});
     }

     handleSelectChange(e){
       this.setState({accountType: e.target.value});
     }


     
    displayDateTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();

if(hours < 10){
    hours = '0' + hours;
}
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  let dateMonthYear = date + '.' + month + '.' + year
  let time = hours + ':' + minutes
  let fullTime = dateMonthYear + ' ' + time
  return fullTime
}
     
     handleAdd(){

      let arr1 = [...this.state.income];
      let arr2 = [...this.state.expense]
    

      if(this.state.accountType === 'income'){      
        arr1.push({description : this.state.description,amount : this.state.amount, date: this.displayDateTime()});
        this.setState({income:arr1});
      }else if(this.state.accountType === 'expense'){
        arr2.push({description : this.state.description, amount : this.state.amount, date: this.displayDateTime()});
        this.setState({expense:arr2});
        
      }
   }
    

  render() {

    const sum1 = this.state.income.reduce(function(accumulator, myObj) {
      return accumulator + Number( myObj.amount);}, 0);
 
    const sum2 = this.state.expense.reduce(function(accumulator, myObj) {
      return accumulator + Number( myObj.amount); }, 0);
 
      const bal = sum1 - sum2

      // console.log(this.state.description)
      // console.log(this.state.income);
      // console.log(this.state.amount);
      // console.log(this.state.accountType);
      // console.log(this.state.amount);
      // console.log(this.state.expense);
    return (
        <div className="Main0">
            <Header 

            description = {this.state.description}
            handleChangeDescription = {this.handleChangeDescription}

            amount = {this.state.Amount}
            handleChangeAmount = {this.handleChangeAmount}

            accountType = {this.state.AccountType}
            handleSelectChange = {this.handleSelectChange}

            handleAdd = {this.handleAdd}
            />
            
        
            
            <Main 
             income = {this.state.income}
             expense = {this.state.expense}
             bal = {bal}
            />
           
           <Footer />
           
        </div>
    
    );
         
  }
}

export default App;
