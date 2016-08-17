import React, { Component } from 'react'
import './index.css'

class Header extends Component {

  render () {
    return <div className='Header'>
      <div className='headerLogo'>
        <img src='http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png'
        width='50' height='50'/>
      </div>
    <form action='search'>
    <input type='search' size='60' placeholder='Search GitHub'></input>
    </form>
    <ul>
      <li>Pull Requests</li>
      <li>Issues</li>
      <li>Gist</li>
    </ul>
    <img src={`https://avatars.githubusercontent.com/u/${this.props.logo}?v=3`} height='35' width='35' alt='little avatar'/>
    </div>
  }
}
Header.propTypes = {
  logo: React.PropTypes.number.isRequired
}
export default Header
