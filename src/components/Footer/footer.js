import React from 'react';
import styles from '../App/App.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Footer = ({ count, onClickFilter, filter, onClickDeleteComplited }) => {

	return (<div className={styles.footer}>
		<div className={styles.item}>
			<ButtonGroup
				task={filter}
			>
				<Button onClick={() => onClickFilter('all')}>Все</Button>
				<Button onClick={() => onClickFilter('active')}>В работе</Button>
				<Button onClick={() => onClickFilter('done')}>Завершенные</Button>
			</ButtonGroup>
		</div>
		<div className={styles.item}>
			<Button
				size="small"
				onClick={() => onClickDeleteComplited()}
			>
			</Button>
		</div>
		<span>Количество дел: {count} </span>
	</div>)
};

export default Footer;