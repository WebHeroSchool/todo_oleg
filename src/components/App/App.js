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
    ]
  };


    constructor (props) {
    	    super(props);

          this.onClickDone = this.onClickDone.bind(this);


    }


    onClickDone (isDone) {
    	    console.log(isDone)
    }

  render () {

    return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <InputItem />
      <ItemList items = {this.state.items} onClickDone={this.onClickDone} />
      <hr />
      <Footer count={3} />
    </div>)
  };

}


export default App;
