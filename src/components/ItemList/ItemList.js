import React from 'react';
import Item from '../Item/Item';


const ItemList =({thingToDo, onClickDone, onClickDelete})=> (<ul>
  {thingToDo.map(item => <li key={item.task}>
    <Item
      task={item.task}
      done={item.done}
      id={item.id}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
      />
    </li>)}
</ul>);


export default ItemList;
