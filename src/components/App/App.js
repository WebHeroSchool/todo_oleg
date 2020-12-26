import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';
import InputItem from '../InputItem/Inputitem';
import styles from './App.module.css';

const todoItem = 'Создать новое приложение';

class App extends React.Component {

  state = {
    items: [
      {
        value: 'Написать приложение',
        isDone: true,
        id: 1
      },
      {
        value: 'прописать пропсв',
        isDone: true,
        id: 2
      },
      {
        value: 'сделать все дела',
        isDone: false,
        id: 3
      }
    ],
    count: 0
  };


  onClickDone = id => {
  const newItemList = this.state.items.map(item => {
    const newItem = {...item};
    if (item.id === id) {
      newItem.isDone = !item.isDone;
    }
    return newItem;
  });
  this.setState({items: newItemList})
};


onClickDelete = id => {
 const newItemList = this.state.items.filter(item => {
          const newItem = {...item};
          if (item.id !== id) {
              return newItem;
          }

      });
      this.setState({ items: newItemList});
};


onClickAdd = value => {
  this.setState(state=>({
    items:[
      ...state.items,
      {
        value,
        isDone: false,
        id: state.count +1
      }
    ],
    count: state.count +1
  }));
}







  render () {

    return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <InputItem onClickAdd={this.onClickAdd} />
      <ItemList items = {this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}/>
      <hr />
      <Footer count={this.state.count}/>
    </div>)
  };

}


export default App;
