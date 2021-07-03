import React from 'react'

import { Button, Container, Text, TextField, Checkbox } from '../../../components';
import SocialLogin from '../../../components/SocialLogin';
import { Box } from '../../../components/Theme';

// interface LoginProps {}

const emailValidator = (email: string) => {
  const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  return regexEmail.test(email);
}

const passsordValidator = (password: string) => {
  return password.length >= 8;
}

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert('ff')}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="body" color="white" style={{ textAlign: 'center' }}>Don't have an account?</Text>
            <Text
              variant="body"
              color="green"
              marginLeft="s"
              style={{ textAlign: 'center' }}>
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container footer={footer}>
      <Box margin="l">
        <Text
          variant="title"
          textAlign="center"
          marginBottom="m">
          Welcome back
        </Text>
        <Text
          variant="body"
          textAlign="center"
          marginBottom="l"
        >
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextField icon="mail" placeholder="Enter your email" validator={emailValidator} />
        </Box>
        <Box marginBottom="m">
          <TextField icon="lock" placeholder="Enter your password" validator={passsordValidator} />
        </Box>
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
          <Checkbox label="Remember me" />
          <Button variant="transparent" onPress={() => alert('olodo!')}>
            <Text color="green">Forgot password</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Log into your account"
            onPress={() => alert('olodo!')} />
        </Box>
      </Box>
    </Container>
  )
}

export default Login

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// })
