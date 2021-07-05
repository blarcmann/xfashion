import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Button } from '../../components'
import { Box, Text } from '../../components/Theme'
import { AuthenticationRoutes, StackNavigationProps } from '../../Navigation'

const Welcome = ({ navigation }: StackNavigationProps<AuthenticationRoutes, 'Onboarding'>) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="lightgray"
        alignItems="center"
        justifyContent="flex-end"
      />
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="lightgray"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2" style={{ textAlign: 'center' }}>Lets get started</Text>
          <Text variant="body" style={{ textAlign: 'center' }}>
            Login to your account below to signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            variant="default"
            label="Join us, its free"
            onPress={() => navigation.navigate('Signup')}
          />
          <BorderlessButton onPress={() => navigation.navigate('ForgotPassword')}>
            <Text variant="button" color="secondary" >Forgot Password?</Text>  
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Welcome