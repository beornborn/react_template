//@flow
import React from 'react'
import pt from 'prop-types'

export default class Layout extends React.Component {
  static propTypes = {
    children: pt.element.isRequired
  }

  static displayName = 'Layout'

  render() {
    return <div>
      {this.props.children}
    </div>
  }
}
