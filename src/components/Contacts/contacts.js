import React from 'react';
import styles from '../App/App.module.css';

class Contacts extends React.Component {
	render() {
		return (
      <div className={styles.wrap}>
        <header>
          <h1 className={styles.title}>Контакты</h1>
          <h3 >Стригунов Олег Витальевич</h3>
          <h4 >Frontend-developer</h4>
        </header>
        <div>
          <address>  Wevon98@yandex.ru</address>
          <address>  г.Санкт - Петербург</address>
        </div>
      </div>
		)
	}
};


export default Contacts;
