import React from 'react';
import classnames from 'classnames';
import styles from '../App/App.module.css';
import PropTypes from 'prop-types';


class Item extends React.Component {

  render () {
    const {task, done, onClickDone, onClickDelete, id} = this.props;
    return (
      <div>
      <span onClick={()=>onClickDone(id)}  className={classnames({[styles.item]: true, [styles.done]: done})}>
      {task}
      </span>
      <span onClick={()=>onClickDelete(id)} className={styles.delete}>  X  </span>
      </div>
    )
  }
  };




  Item.defaultProps = {
  	done: false
  };

  Item.propTypes = {
  	done: PropTypes.bool.isRequired,
  	task: PropTypes.string.isRequired
  };

  export default Item;
