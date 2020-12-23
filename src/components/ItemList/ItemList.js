import React from 'react';
import Item from '../Item/Item';
const ItemList =({todoItem})=> (
  <ul>
  <li><Item todoItem={todoItem}/></li>
  <li><Item todoItem={'Понять что такое пропсы'}/></li>
  <li><Item todoItem={'еще что то'}/></li>
  </ul>
);

export default ItemList;
