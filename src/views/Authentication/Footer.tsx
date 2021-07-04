import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
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
        <TouchableWithoutFeedback  {...{ onPress }}>
          <Text variant="body" color="white">
            <Text>{`${title} `}</Text>
            <Text variant="body" color="green"> {action} </Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  )
}

export default AuthFooter
