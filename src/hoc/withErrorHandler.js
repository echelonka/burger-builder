import React, { Component } from 'react'
import Modal from '../components/UI/Modal/Modal'
import Aux from './Aux'

const withErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentDidMount () {
      this.reqInterceptor = axios.interceptors.request.use(request => {
        this.setState({ error: null })
        return request
      })
      this.resInterceptor = axios.interceptors.response.use(null, error => this.setState({ error }))
    }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.resInterceptor)
    }

    confirmError = () => this.setState({ error: null })

    render () {
      return (
        <Aux>
          <Modal show={ this.state.error } modalClosed={ this.confirmError }>
            { this.state.error ? this.state.error.message : null }
          </Modal>
          <WrapperComponent { ...this.props.children } />
        </Aux>
      )
    }
  }
}

export default withErrorHandler
