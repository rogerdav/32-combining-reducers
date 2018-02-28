import React from 'react';
import CategoryForm from '../category-form/index';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';
import {expenseCreate} from '../../action/expense-actions';
import ExpenseForm from '../expense-form/index';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      editing: false,
    };
    
    this.handleEditing = this.handleEditing.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleEditing() {
    this.setState({editing: !this.state.editing});
  }
  
  handleDelete() {
    this.props.handleDelete(this.props.category);
  }
  handleAdd() {
    this.props.handleDelete(this.props.category);
  }

  render() {
    
    return (
      <li className='category-item'
      
        onDoubleClick={this.handleEditing}>
        <p>{this.props.category.title}hello</p>
        <p>   {this.props.category.budget}</p>
        <button onClick={this.handleEditing}>Update</button>
        <button onClick={this.handleDelete}>Delete</button>
        {this.state.editing ?
          <CategoryForm 
            buttonText='update'
            onComplete={this.props.handleUpdate}
            category={this.props.category}
            toggleEdit={this.handleEditing}
          />
          : <ExpenseForm buttonText='Add Expense' cat={this.props.category} onComplete={this.props.catItemexpenseCreate} />
        }
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