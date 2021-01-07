import React from 'react';
import Item from '../Item/Item';

const ItemList = ({onClickDone, onClickDelete, filterItems }) => (
    <ul >
        { filterItems().map((item) => <li key={item.value}>
            <Item
                value={item.value}
                isDone={item.isDone}
                id={item.id}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
            />
        </li>)}
    </ul>);

export default ItemList;