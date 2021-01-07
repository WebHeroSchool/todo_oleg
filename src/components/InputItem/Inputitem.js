import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../App/App.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: false,
    errorMessage: '',
    items: []
  };

  onButtonClick = () => {
    if (this.state.inputValue !== '') {
      if (this.props.items.find((item) => this.state.inputValue === item.value)) {
        this.setState({
          error: true,
          errorMessage: 'Ошибка, извините'
        });
      } else {
        this.setState({
          inputValue: '',
          error: false,
          errorMessage: ''
        });
        this.props.onClickAdd(this.state.inputValue);
      }
    } else {
      this.setState({
        error: true,
        errorMessage: 'Ошибка, извините'
      });
    }
  }
     ///vee
  render () {
    return (<div style={{ display: "flex" }} >
          <TextField
            id="standard-full-width"
            label="Добавить задание"
            helperText="Введите задачу для списка дел"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            value={this.state.inputValue}
            error={this.state.error}
            onChange={(event) => this.setState({ inputValue: event.target.value })}
          />
          <Button
            variant='contained'
            color='primary'
            size='normal'
            className={styles.but}
            onClick={this.onButtonClick}
          >
            Добавить
          </Button>
        </div>
   );
  }
}

export default InputItem;