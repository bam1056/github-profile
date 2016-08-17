import React, { Component } from 'react'
import './index.css'

class UserInfoTable extends Component {

  tablerows () {
    return Object.keys(this.props.userinfo).map((key, index) => {
      switch (key) {
        case 'email':
        case 'login':
        case 'company':
        case 'name':
        case 'id':
        case 'location': { return (<tr key={index}>
          <td>{key}</td>
          <td>{this.props.userinfo[key]}</td>
        </tr>) }
          break
        default: console.log('error')
      }
    })
  }

  render () {
    return <div className='Info'>
      <table>
        <tbody>
          {this.tablerows()}
        </tbody>

      </table>
    </div>
  }
}

UserInfoTable.propTypes = {
  userinfo: React.PropTypes.object.isRequired
}

export default UserInfoTable
