import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';


import theme, { Box, Text } from '../Theme'

interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: (val: boolean) => void;
}

const Checkbox = ({ label, value, onChange }: CheckboxProps) => {
  return (
    <BorderlessButton
      onPress={() => onChange(!value)}
      style={{ justifyContent: 'center' }}
    >
      <Box alignItems="center" flexDirection="row">
        <Box
          width={20}
          height={20}
          borderRadius="s"
          justifyContent="center"
          alignItems='center'
          borderColor="green"
          borderWidth={1}
          marginRight="s"
          backgroundColor={value ? 'green' : 'white'}>
          <Icon name="check" color={value ? theme.colors.white : theme.colors.green} />
        </Box>
        <Text variant="body">{label}</Text>
      </Box>
    </BorderlessButton>
  )
}

export default Checkbox

// const styles = StyleSheet.create({})
