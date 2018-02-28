import React from 'react';
import CategoryForm from '../category-form/index';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';
import {expenseCreate} from '../../action/expense-actions';
import ExpenseForm from '../expense-form/index';
import {renderIf} from '../../lib/util';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      editing: false,
      expenseView: false,
      expenseListView: false,

    };
    
    this.handleEditing = this.handleEditing.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
    this.handleExpenseList = this.handleExpenseList.bind(this);
  }
  handleEditing() {
    this.setState({editing: !this.state.editing});
  }
  handleAddExpense() {
    this.setState({expenseView: !this.state.expenseView});
  }
  handleExpenseList() {
    this.setState({expenseListView: !this.state.expenseListView});
  }
  
  handleDelete() {
    this.props.handleDelete(this.props.category);
  }
  

  render() {
    
    return (
      <li className='category-item'
        onClick={this.handleExpenseList}
        onDoubleClick={this.handleAddExpense}>
        <p>{this.props.category.title}</p>
        <p>   {this.props.category.budget}</p>
        <button onClick={this.handleEditing}>Update</button>
        <button onClick={this.handleDelete}>Delete</button>
        {renderIf ((this.state.editing),
          <CategoryForm 
            buttonText='update'
            onComplete={this.props.handleUpdate}
            category={this.props.category}
            toggleEdit={this.handleEditing}
          />)}
        {renderIf ((this.state.expenseView),
        
          <ExpenseForm 
            buttonText='Add Expense' 
            cat={this.props.category} 
            onComplete={this.props.catItemexpenseCreate} />
        )}
        {renderIf ((this.state.expenseListView),
          <h3>expenseListView</h3>
        )}
        
      </li>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  catItemexpenseCreate: expense => dispatch(expenseCreate(expense)),
  
});

export default connect(mapStateToProps, mapDispatchToProps) (CategoryItem);

// export default CategoryItem;