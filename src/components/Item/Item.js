import React from 'react';
import classnames from 'classnames';
import styles from '../App/App.module.css';
import PropTypes from 'prop-types';


class Item extends React.Component {
  componentDidMount (){
    console.log('componentDidMount');
  };

  componentDidUpdate (){
      console.log('componentDidUpdate');
  }

  componentWillUnmount (){
      console.log('componentWillUnmount');
  }

  render () {
    const {value, isDone, onClickDone, onClickDelete, id} = this.props;
    return (
      <div>
      <span onClick={()=>onClickDone(id)}  className={classnames({[styles.item]: true, [styles.done]: isDone})}>
      {value }
      </span>
      <span onClick={()=>onClickDelete(id)} className={styles.delete}>  X  </span>
      </div>
    )
  }
}

Item.defaultProps = {
  isDone: false,
};

Item.propTypes = {
  todoItem: PropTypes.array.isRequired,
  isDone: PropTypes.bool,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func,
  id: PropTypes.number.isRequired,
};



export default Item;
