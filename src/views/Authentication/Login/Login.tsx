import React from 'react'

import { Button, Container, Text } from '../../../components';
import SocialLogin from '../../../components/SocialLogin';
import { Box } from '../../../components/Theme';

// interface LoginProps {}

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
    </Container>
  )
}

export default Login

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// })
