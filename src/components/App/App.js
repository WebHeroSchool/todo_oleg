import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';
import styles from './App.module.css';

const todoItem = 'Создать новое приложение';
const App =()=> {
  const items = [
    {
      value: 'Написать приложение',
      isDone: true
    },
    {
      value: 'прописать пропсв',
      isDone: true
    },
    {
      value: 'сделать все дела',
      isDone: false
    }
  ];

  return (
  <div className={styles.wrap}>
    <h1 className={styles. title}>Важные дела:</h1>
    <p>InputItem</p>
    <hr />
    <ItemList items = {items}/>
    <hr />
    <Footer count={3} />
  </div>);
}

export default App;
