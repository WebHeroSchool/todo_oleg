import React from 'react';
import styles from '../App/App.module.css';

const Footer = ({count, onClickFooter})=> (<div  className={styles.footer} >Осталось выполнить: {count}</div>);

Footer.defaultProps = {

    count: 0

};
export default Footer;
