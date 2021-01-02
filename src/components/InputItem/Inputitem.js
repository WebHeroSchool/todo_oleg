import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../App/App.module.css';
import PropTypes from 'prop-types';



class InputItem extends React.Component {
  state = {
    inputTask: ''
  };

  onButtonClick = () => {
    if(this.state.inputTask === '' || this.state.inputTask === 'Какие у вас задачи?') {
      this.setState({
        inputTask: 'Какие у вас задачи?'
      });
  }
  else {
    this.setState({
      inputTask: ''
    });
    this.props.onClickAdd(this.state.inputTask.toUpperCase());
    }
  };

  render() {

    return (<div>
      <TextField
        id="standard-dense"
        label="Добавить задание"
        margin="dense"
        value = {this.state.inputTask}
        onChange={event=>this.setState({inputTask: event.target.value})}
      />
      <Button
      variant='contained'
      color='primary'
      size='large'
      className={styles.but}
      onClick={this.onButtonClick}
      >
        Добавить
      </Button>
    </div>);
  }
};



InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired
};

export default InputItem;
