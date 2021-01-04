import React from 'react';
import styles from '../App/App.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    user: [],
    errorText: '',
    isLoading: true,
    isError: false,
    repoList: [],
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'StrigunovOleg'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      })
    }).catch(error => (this.setState({
      isLoading: false,
      isError: true,
      errorText: error
    })));

    octokit.users.getByUsername({
      username: 'StrigunovOleg'
    }).then(({ data }) => {
      this.setState({
        user: data,
        isLoading: false
      })
    }).catch(error => (this.setState({
        isLoading: false,
        isError: true,
        errorText: error
    })));
  }

  render() {
    const { user, errorText, isLoading, isError, repoList } = this.state;

    return(
      <div className = {styles.wrap}>
        {isError ?
          <div >
            <h2 className={styles.title}>
              Возникла проблема
            </h2>
            <span >{ errorText.message }</span>
            <span >{ errorText.status }</span>
          </div> : <>
          {isLoading ? <LinearProgress /> :
            <h1 className={styles.title}>
              Обо мне
            </h1>
          }
          <div >
            <div>
              <img width="300px;" src={user.avatar_url}  alt={user.login}/>
            </div>
            <div >
              <p><b>Привет! Меня зовут Олег.</b></p>
              <p>GitHub ID: {user.id}</p>
              <p>GitHub login: {user.login}</p>
              <p>GitHub url: <a href={user.html_url}> OPEN </a></p>
            </div>
          </div>
          <div >
            <p >
            <b>
              Мои репозитории:
              </b>
            </p>
              {repoList.map(repo => (<div key={repo.name}>
                <a href={repo.html_url}>{repo.name}</a>
                <p >{repo.description}</p>
              </div>))}
          </div>
        </>}
      </div>
    )
  }
}

export default About;
