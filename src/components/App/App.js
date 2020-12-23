import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';

const todoItem = 'Создать новое приложение';
const App =()=> (
  <div>
    <h1>Важные дела:</h1>
    <p>InputItem</p>
    <ItemList todoItem = {todoItem}/>
    <Footer count={3} />
  </div>
);

export default App;
