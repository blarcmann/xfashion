import React from 'react'
import { Button, Container, Text, RoundedIconButton } from '../../components';
import { Box } from '../../components/Theme';
import { AuthNavigationProps } from '../../Navigation';


const PasswordChanged = ({ navigation }: AuthNavigationProps<'PasswordChanged'>) => {
  const SIZE = 80;
  return (
    <Container pattern={0} footer={
      <Box flexDirection="row" justifyContent="center">
        <RoundedIconButton
          name="x"
          color="secondary"
          size={60}
          backgroundColor="white"
          onPress={() => navigation.pop()} />
      </Box>
    }>
      <Box alignItems="center">
        <RoundedIconButton
          name="check"
          color="green"
          size={SIZE}
          backgroundColor="lightgreen" />
        <Text variant="title" textAlign="center" marginVertical="l">
          Your password was changed successfully
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close this window and try log in again
        </Text>

        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Login"
            onPress={() => navigation.navigate('Login')} />
        </Box>
      </Box>
    </Container>
  )
}

export default PasswordChanged
