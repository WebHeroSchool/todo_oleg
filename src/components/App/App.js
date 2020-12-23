import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';
import './App.css';

const todoItem = 'Создать новое приложение';
const App =()=> {
  const items = [
    {
      value: 'Написать приложение'
    },
    {
      value: 'прописать пропсв'
    },
    {
      value: 'сделать все дела'
    }
  ];

  return (
  <div className="wrap">
    <h1 className="wrap__title">Важные дела:</h1>
    <p>InputItem</p>
    <hr />
    <ItemList items = {items}/>
    <hr />
    <Footer count={3} />
  </div>);
}

export default App;
