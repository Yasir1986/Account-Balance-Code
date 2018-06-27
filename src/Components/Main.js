import React from 'react';
import Income from './Income';
import Expense from './Expense';


class Main extends React.Component {
    render(){
     return(
        <div className="Main">
           <Income income = {this.props.income} />
           <Expense expense = {this.props.expense} />
           <div className="balance">
           <br />
           <br />
           <br />
           <br />
           <h3>Balance</h3>
           <hr />
           <h3>Net: {this.props.bal}€ </h3>
            </div>
        </div>
        );
    }
}

export default Main;

