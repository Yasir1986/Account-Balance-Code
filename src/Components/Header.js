import React from 'react';


class Header extends React.Component {
    render(){
     return(
             <div className="App-title">
                    <h1 >Account Balance Application</h1>
                    <input className="input1" type="text" placeholder="Description"
                        value= {this.props.description}
                        onChange  = {this.props.handleChangeDescription}
                    />

                    <input className="input2" type="number" placeholder="Amount" 
                        value= {this.props.amount}
                        onChange  = {this.props.handleChangeAmount}               
                    />

                <select className="select"
                
                        value = {this.props.accountType}
                        onChange = {this.props.handleSelectChange}
                >
                <option value="income">Income</option>
                    
                    <option value="expense">Expense</option>
                </select>

                    <button className="Btn"

                        onClick = {this.props.handleAdd}

                    >Add</button>

          </div>
        );
    }
}

export default Header;