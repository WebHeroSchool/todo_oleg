import React,{ useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';
import InputItem from '../InputItem/Inputitem';
import styles from '../App/App.module.css';

const Todo = () => {
	const initialState = {
		thingToDo: [
			{
				task: 'Задача 1',
				done: false,
				id: 1
			},
			{
				task: 'Задача 2',
				done: false,
				id: 2
			},
			{
				task: 'Задача 3',
				done: true,
				id: 3
			}
		],
		count: 3
	};

	const [thingToDo, setThingToDo] = useState(initialState.thingToDo);
	const [count, setCount] = useState(initialState.count);

  useEffect(() => {
    console.log('обновлено');
});

  useEffect(() => {
    console.log('смонтировано');
}, []);

  useEffect(() => {
    console.log('изменился count');
}, [count]);

	const onClickDone = id => {
		const newItemList = thingToDo.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.done = !item.done
			};
			return newItem;
		});
		setThingToDo(newItemList);
	};

	const onClickDelete = id => {
		const newItemList = thingToDo.filter(item => item.id !== id);
		setThingToDo(newItemList);
		setCount((count) => count - 1)
	};

	const onClickAdd = task => {
		const newThingToDo = [
			...thingToDo,
			{
				task,
				done: false,
				id: count + 1
			}
		];
		setThingToDo(newThingToDo);
		setCount((count) => count + 1);
	};

	return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <InputItem onClickAdd = {onClickAdd} />
      <ItemList
        thingToDo = {thingToDo}
        onClickDone = {onClickDone}
        onClickDelete = {onClickDelete}
      />
      <hr />
      <Footer count={count}/>
    </div>)

};

export default Todo;
