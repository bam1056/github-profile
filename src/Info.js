import React, { Component } from 'react'
import UserInfoTable from './UserInfoTable'
import './index.css'

class Info extends Component {

  render () {
    return <div className='Info'>
      <UserInfoTable userinfo={this.props.info}/>
    </div>
  }
}

Info.propTypes = {
  info: React.PropTypes.object.isRequired
}

export default Info
