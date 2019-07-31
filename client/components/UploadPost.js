import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { POST_REPO } from '../gql';
import Loading from './Loading';

const styles = require('../styles/UploadPost.scss');
const style = require('../styles/Header.scss');

class UploadPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoLink: '',
      description: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Mutation mutation={POST_REPO}>
        {
          (postRepo, { error, loading, data }) => {
            if (error) {
              console.log(error.message);
            }
            if (loading) return (<Loading/>);
            if (data) {
              console.log(data);
            }
            return (
              <div className={styles.Modal}>
                <div className={styles.Overlay}/>
                <form className={styles.UploadForm}
                      onSubmit={ e => {
                        e.preventDefault();
                        postRepo({
                          variables: {
                            link: this.state.repoLink,
                            description: this.state.description,
                          }
                        });
                      }}>
                  <label htmlFor="repoLink">Repository Link</label>
                  <input className={styles.InputStyle} onChange={this.handleChange} type="text"
                         name='repoLink'
                         value={this.state.repoLink}
                         placeholder='Repository name or link here..' required/>
                  <label className={styles.DescriptionLabel} htmlFor="description">Description</label><br/>
                  <textarea className={styles.InputStyle} onChange={this.handleChange}
                         name='description'
                         value={this.state.description}
                         placeholder="Description of the repository's contents"/>
                  <button type='submit'
                          className={`${styles.PostButton} ${style.NewRepos}`}>POST
                  </button>
                  <button type='reset' onClick={this.props.handleReset}
                          className={`${styles.CancelButton} ${style.NewRepos}`}>CANCEL
                  </button>
                </form>
              </div>
            );
          }
        }
      </Mutation>
    );
  }
}

export default UploadPost;
