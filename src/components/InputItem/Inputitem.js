import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../App/App.module.css';


class InputItem extends React.Component {
    state = {
      inputValue: ''
    };

    onButtonClick = ()=> {

      if(this.state.inputValue == '' || this.state.inputValue == 'Какие у вас задачи?') {
        this.setState({
          inputValue: 'Какие у вас задачи?'
        });
    }
    else {
      this.setState({
        inputValue: ''
      });
      this.props.onClickAdd(this.state.inputValue.toUpperCase());
    }
  }

    render () {
      const {onClickAdd} = this.props;
      return (<div>
          <TextField
              id="standard-dense"
              label="Добавить задание"
              margin="dense"
              fullWith
              value = {this.state.inputValue}
              onChange={event=>this.setState({inputValue: event.target.value})}
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
}


export default InputItem;
