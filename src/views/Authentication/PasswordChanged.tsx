import React from 'react'
import { Button, Container, Text, CloseButton } from '../../components';
import { Box } from '../../components/Theme';
import { StackNavigationProps, Routes } from '../../Navigation';
import { Feather as Icon } from '@expo/vector-icons';


const PasswordChanged = ({ navigation }: StackNavigationProps<Routes, 'PasswordChanged'>) => {
  const SIZE = 60;
  return (
    <Container pattern={0} footer={
      <Box flexDirection="row" justifyContent="center">
        <CloseButton onPress={() => navigation.pop()} />
      </Box>
    }>
      <Box padding="l" alignItems="center" justifyContent="center" flex={1}>
        <Box
          backgroundColor="lightgreen"
          justifyContent="center"
          alignItems="center"
          marginBottom="l"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}>
          <Text color="green">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title" textAlign="center" marginBottom="m">
          Password changed successfully
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email associated with your account
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
