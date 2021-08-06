import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Button } from '../../../components'
import { Box } from '../../../components/Theme'

interface FooterProps {
  onPress: () => void;
  label: string;
}

const Footer = ({ onPress, label }: FooterProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      backgroundColor="secondary"
      paddingTop="m"
      borderTopLeftRadius="xl"
      borderTopRightRadius="xl"
    >
      <Box style={{
        paddingBottom: insets.bottom,
        alignItems: 'center',
      }}>
        <Button variant="primary" {...{ onPress, label }} />
      </Box>
    </Box>
  )
}

export default Footer
