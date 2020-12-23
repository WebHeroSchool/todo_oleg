import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';

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
  <div>
    <h1>Важные дела:</h1>
    <p>InputItem</p>
    <ItemList items = {items}/>
    <Footer count={3} />
  </div>);
}

export default App;
