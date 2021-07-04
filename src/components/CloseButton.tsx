import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Text } from './Theme';


interface CloseButtonProps {
  onPress: () => void;
}

const CloseButton = ({ onPress }: CloseButtonProps) => {
  const SIZE = 60;
  return (
    <TouchableOpacity {...{ onPress }}>
      <Box justifyContent="center" alignItems="center"
        style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2, backgroundColor: "white" }}>
        <Text color="secondary" textAlign="center">
          <Icon name="x" size={40} />
        </Text>
      </Box>
    </TouchableOpacity>
  )
}

export default CloseButton