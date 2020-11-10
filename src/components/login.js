import React, { Component } from 'react'
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import {
  Label,
  Input,
} from '@rebass/forms'

import {
  Box,
  Flex,
  Button,
} from 'rebass'


export class login extends Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    const { target } = event
    console.log(event.target.value, 'targetttt')
    this.setState({
      [target.name]: target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state, 'this.statethis.state')
    handleLogin(this.state)
    navigate(`/app/profile`)
  }

  render() {
    console.log(isLoggedIn(), 'isLoggedIn()isLoggedIn()')
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }
    return (
      <>
        <Box
          as='form'
          py={3}>
          <Flex mx={-2} mb={3}>
            <Box width={1/2} px={2}>
              <Label htmlFor='name'>Username</Label>
              <Input
                id='username'
                name="username"
                defaultValue='User Name'
                onChange={e => this.handleUpdate(e)}
              />
            </Box>
            <Box width={1/2} px={2}>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                name="password"
                defaultValue='Password'
                onChange={this.handleUpdate}
              />
            </Box>
          </Flex>
          <Button
            variant='primary'
            mr={2}
            onClick={this.handleSubmit}
          >Submit</Button>
        </Box> 
      </>
    )
  }
}

export default login
