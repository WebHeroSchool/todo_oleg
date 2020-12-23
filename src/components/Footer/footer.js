import React from 'react';
import styles from '../App/App.module.css';

const Footer = ({count})=> (<div className={styles.footer}>Осталось выполнить: {count}</div>);

export default Footer;
