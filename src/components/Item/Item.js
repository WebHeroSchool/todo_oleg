import React from 'react';
import classnames from 'classnames';
import styles from '../App/App.module.css';

class Item extends React.Component {
  render() {
    const { value, isDone, id, onClickDone, onClickDelete } = this.props;
    return (<div>
      <span onClick={()=>onClickDone(id)}  className={classnames({[styles.item]: true, [styles.done]: isDone})}>
      {value}
      </span>
      <span onClick={()=>onClickDelete(id)} className={styles.delete}>  X  </span>
    </div>)
  }
}

export default Item;