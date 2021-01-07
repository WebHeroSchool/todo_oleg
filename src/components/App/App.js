import React from 'react';
import styles from './App.module.css';
import Todo from '../Todo/todo';
import Contacts from '../Contacts/contacts';
import About from '../About/about';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
  <div className={styles.content}>
    <div className={styles.sidebar}>
        <Link to='/'>ОБО МНЕ</Link>
        <Link to='/todo'>ЗАДАЧИ</Link>
        <Link to='/contacts'>КОНТАКТЫ</Link>
    </div>
    <div>
    <Route path='/' exact component={About} />
    <Route path='/todo' component={Todo} />
    <Route path='/contacts' component={Contacts} />
    </div>
  </div>
  </Router>
)

export default App;
