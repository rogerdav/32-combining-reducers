import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.expense 
      ? this.props.expense
      : {
        name: '',
        amount: '',
        category: this.props.cat._id,

      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({name: '', amount: '', category: ''});
    // if(this.props.buttonText === 'update') this.props.toggleEdit();
    
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <h3> Add a new expense for this category</h3>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}/>
        <input 
          type='number'
          name='amount'
          value={this.state.amount}
          onChange={this.handleChange} />
      
        <button type='submit'>{this.props.buttonText}</button>
      </form>

    );
  }
}

export default ExpenseForm;