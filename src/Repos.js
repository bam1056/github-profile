import React, { Component } from 'react'
import 'whatwg-fetch'
import './index.css'

class Repos extends Component {

  constructor () {
    super()
    this.state = {
      repos: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.url !== undefined) {
      fetch(nextProps.url + '?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4')
        .then((resp) => {
          return resp.json()
        })
        .then((data) => {
          this.setState({ repos: data })
        })
    }
  }

  render () {
    console.log(this.state.repos)
    const repos = this.state.repos.map((repo, index) => {
      return <li key={index}>
        <a href={repo.html_url}>{repo.name}</a>
        <p>Last Updated: {repo.updated_at}</p>
      </li>
    })

    return <div className='RepoList'>
      <h3>My Repos</h3>
      <ul className='Repos'>
        {repos}
      </ul>
    </div>
  }
}

export default Repos
