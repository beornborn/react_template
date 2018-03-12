//@flow
import React from 'react'
import { Container } from './Example.style'
// import pt from 'prop-types'

export default class Example extends React.Component {
  static propTypes = {
    // prop: pt.string.isRequired
  }

  render() {
    return <Container>
      test
    </Container>
  }
}
