import React from 'react';
import styles from '../App/App.module.css';

const Footer = ({count, onClickFooter})=> (<div onClick={onClickFooter} className={styles.footer} >Осталось выполнить: {count}</div>);


export default Footer;
