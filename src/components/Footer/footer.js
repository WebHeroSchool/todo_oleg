import React from 'react';
import styles from '../App/App.module.css';
import PropTypes from 'prop-types';

const Footer = ({count, onClickFooter})=> (<div  className={styles.footer} >Осталось выполнить: {count}</div>);

Footer.propTypes = {

     count: PropTypes.number.isRequired
};
export default Footer;
