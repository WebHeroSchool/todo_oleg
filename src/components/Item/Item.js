import React from 'react';
import classnames from 'classnames';
import styles from '../App/App.module.css';

const Item =({value, isDone, onClickDone})=>(<span onClick={()=>onClickDone(isDone)} className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone,
  })
}>{value }</span>
);

export default Item;
