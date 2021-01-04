import React from 'react';
import styles from '../App/App.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Octokit} from '@octokit/rest';
import classnames from "classnames";

const octokit = new Octokit();

class About extends React.Component {
  state = {
    username: 'StrigunovOleg',
    isLoading: true,
    repoList: [],
    userInfo: [],
    incorrectRequest: false,
  }

  componentDidMount() {

    const {username} = this.state;

    octokit.repos.listForUser({
      username,
    }).then(({data}) => {
      this.setState({
        isLoading: false,
        repoList: data,
      });
    }).catch(() => {
      this.setState({
        incorrectRequest: true,
      });
    });

    octokit.users.getByUsername({
      username,
    }).then(({data}) => {
      this.setState({
        isLoading: false,
        userInfo: data,
      });
    }).catch(() => {
      this.setState({
        incorrectRequest: true,
      });
    });

  }

  render() {
    const { isLoading, repoList, userInfo, incorrectRequest } = this.state;

    return (
        <div
            className={classnames({
              [styles.wrap]: true,
              [styles.error]: isLoading,
            })}
        >
          {isLoading ? <LinearProgress /> : <div>
            <h1>Обо мне</h1>
            <div className={styles.img__wrap}>
              <img className={styles.avatar} src={userInfo.avatar_url} alt='Avatar'/>
              <div className={styles.login}> Login to GitHub: <span className={styles.text}>{userInfo.login}</span></div>
            </div>
            <p> My name is <span className={styles.text}>{userInfo.name}</span></p>
            <p> {userInfo.bio}</p>
            <p>My repositories:</p>
            <ol className={styles.list}>
              { repoList.map( (repo) => (
                  <li className={styles.item} key={repo.id}>
                    <a className={styles.link} href={repo.html_url}>{repo.name}</a>
                  </li>))}
            </ol></div>
          }
          {incorrectRequest && <div>Ошибка запроса!</div>}
        </div>
    );
  }
}
export default About;
