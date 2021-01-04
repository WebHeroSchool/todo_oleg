import React from 'react';
import styles from '../App/App.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repolList: [],
    nameUser: [],
    infoUser: [],
    avatarUser: [],
    isError: false,
    error: {}
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'StrigunovOleg'
    }).then(({ data }) => {
      this.setState({
        repolList: data,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isError: true,
        error: error
      })
    });


    octokit.users.getByUsername({
      username: 'StrigunovOleg'
    }).then((response) => {
      this.setState({
        nameUser: response.data.login,
        avatarUser: response.data.avatar_url,
        infoUser: response.data.bio,
        isLoading: false
      })
    }).catch(error => {
      this.setState({
        isError: true,
        error: error
      })
    });
  }

  render () {
    const { isLoading, repolList, nameUser, infoUser, avatarUser } = this.state;
    return (
        <div className={styles.wrap}>
          <h2 className={styles.name}>My name is { nameUser }</h2>
          <p>{ infoUser }</p>
          <img className={styles.img} src={avatarUser} alt={nameUser} />
          <h1 className={styles.title}>{ isLoading ?  <LinearProgress /> : 'My  repositories'}</h1>
          {!isLoading && <ol>
            {repolList.map(repo => (<li className={styles.list} key={repo.id}>
              {repo.name}
              <a className={styles.link} href={repo.html_url}>Link to GitHub</a>
            </li>))}
          </ol>}
        </div>
    );
  }
}
export default About;
