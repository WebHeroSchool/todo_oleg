import React from 'react';
import styles from '../App/App.module.css';
import PropTypes from 'prop-types';

class Footer extends React.Component {

render() {
		const { count } = this.props;
		return (
			<div className={styles.footer}>Осталось выполнитьл: {count}.</div>
		)
	}
};

Footer.defaultProps = {
	count: 0
};

Footer.propTypes = {
	count: PropTypes.number.isRequired
};

export default Footer;
