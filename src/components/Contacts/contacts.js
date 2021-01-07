import React from 'react';
import styles from '../App/App.module.css';
import telegram from './icons/tg.png'
import email from './icons/email.png'

class Contacts extends React.Component {
	render() {
		return (
      <div className={styles.wrap}>
        <header>
          <h1 className={styles.title}>Контакты</h1>
          <h3 >Стригунов Олег Витальевич</h3>
          <h4 >Frontend developer</h4>
        </header>
        <div className={styles.contacts}>
            <div >
                <img src={email} alt="email"  />
                <a className={styles.link} href="mailto:Wevon98@yandex.ru">Wevon98@yandex.ru</a>
            </div>
            <div >
                <img src={telegram} alt="telegram"  />
                <a className={styles.link} href="https://t.me/str_oleg">Telegram</a>
            </div>
            <address><p>г.Санкт - Петербург</p></address>
        </div>
      </div>
		)
	}
};


export default Contacts;
