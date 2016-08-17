import React, { Component } from 'react'
import Avatar from './Avatar'
import Followers from './Followers'
import Info from './Info'
import Repos from './Repos'
import Header from './Header'
import contributions from './contributions.svg'
import 'whatwg-fetch'
import moment from 'moment'

class App extends Component {

  constructor () {
    super()
    this.state = {
      user: 'bam1056',
      userData: {}
    }
  }

  componentWillMount () {
    fetch(`https://api.github.com/users/${this.state.user}?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4`)
      .then((resp) => { return resp.json() })
      .then((data) => {
        this.setState({ userData: data })
      })
  }
  render () {
    const user = this.state.userData
    return <div className='App'>
        <Header logo={user.id}/>
        <div className="container">
        <div className='userInfo'>
        <Avatar id={user.id} />
        <h1>{user.name}</h1>
        <h2>{user.login}</h2><br/>
        <p>{user.bio}</p>
        <ul>
          <li>{user.company}</li>
          <li>{user.location}</li>
          <li>{user.email}</li>
          <li>{moment(user.created_at).format("dddd, MMMM Do YYYY")}</li>
        </ul>
        <Followers url={user.followers_url} />
        </div>

        <Repos url={user.repos_url} />
        {/* <Info info={user}/> */}
        </div>
        <div className='contributions'>
        <h1>Contributions</h1>
        <img src={contributions} width='85%' alt='SVG of GitHub contributions' />
        </div>
      </div>
  }
}

export default App
