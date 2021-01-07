import React,{ useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';
import InputItem from '../InputItem/Inputitem';
import styles from '../App/App.module.css';

const Todo = () => {
	const initialState = {
		items: JSON.parse(localStorage.getItem('items')) || [],
		filter: 'all',
		count: JSON.parse(localStorage.getItem('count')) || 0,
		item: ''
	};

	const [items, setItem] = useState(initialState.items);
	const [count, setCount] = useState(initialState.count);
	const [filter, setFilter] = useState(initialState.filter);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
	}, [items]);

	const onClickDone = (id) => {
		const newItemList = (items.map((item) => {
			const newItem = { ...item };

			if (newItem.id === id) {
				newItem.isDone = !newItem.isDone;
			}
			return newItem;
		}));
		setItem(newItemList);
	};

	const onClickDelete = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItem(newItems);
		setCount(count - 1);
	};

	const onClickAdd = (value) => {
		const newItems = [
			...items,
			{
				value,
				isDone: false,
				id: count + 1
			}
		];
		setItem(newItems);
		setCount((count) => count + 1);
	};

	const onClickDeleteComplited = () => {
		const newItems = items.filter((it) => it.isDone === false);
		setItem(newItems);
	};

	const filterItems = () => {
		if (filter === 'all') {
			return items;
		} else if (filter === 'active') {
			return items.filter((item) => !item.isDone);
		} else if (filter === 'done') {
			return items.filter((item) => item.isDone);
		}
	};

	const onClickFilter = (filter) => {
		setFilter(filter);
	};

	useEffect(() => {
		localStorage.setItem('count', JSON.stringify(count));
	}, [count]);

	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>
				Важные дела
			</h1>
			<InputItem
				onClickAdd={onClickAdd}
				items={items}
			/>
			<ItemList
				onClickDone={onClickDone}
				onClickDelete={onClickDelete}
				filterItems={filterItems}
				items={items}
			/>
			<Footer
				onClickFilter={onClickFilter}
				filter={filter}
				filterItems={filterItems}
				onClickDeleteComplited={onClickDeleteComplited}
				count={items.filter((it) => it.isDone === false).length}
			/>
		</div>
	)
}


export default Todo;