import React from 'react';
import classnames from 'classnames';
import styles from '../App/App.module.css';

const Item =({value, isDone, onClickDone, onClickDelete, id} )=>(
  <div>
  <span onClick={()=>onClickDone(id)}  className={classnames({[styles.item]: true, [styles.done]: isDone})}>
  {value }
  </span>
  <span onClick={()=>onClickDelete(id)} className={styles.delete}>  X  </span>
  </div>
);

export default Item;
