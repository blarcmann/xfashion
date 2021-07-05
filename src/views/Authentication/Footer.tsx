import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import SocialLogin from '../../components/SocialLogin';
import { Box, Text } from '../../components/Theme';

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const AuthFooter = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <BorderlessButton  {...{ onPress }}>
          <Text variant="body" color="white">
            <Text>{`${title} `}</Text>
            <Text variant="body" color="green"> {action} </Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  )
}

export default AuthFooter
