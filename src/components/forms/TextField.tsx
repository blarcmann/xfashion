import React, { useState } from 'react'
import { StyleSheet, TextInput, TextInputProps as RNTextInputProps } from 'react-native'
import theme, { Box } from '../Theme'
import { Feather as Icon } from '@expo/vector-icons';

interface TextFieldProps extends RNTextInputProps {
  icon: any;
  validator: (input: string) => boolean;
}
const ICON_SIZE = theme.borderRadii.m * 2;

const Valid = true;
const Invalid = false;
const Pristine = null;

type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextField = ({ icon, validator, ...props }: TextFieldProps) => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<InputState>(Pristine);
  const recolor = status === Pristine ? 'darkgray' : (status === Valid ? 'green' : 'danger');
  const color = status === Pristine
    ? theme.colors.darkgray
    : (status === Valid ? theme.colors.green : theme.colors.danger);

  const onChangeText = (text: string) => {
    setInput(text);
    if (status !== Pristine) {
      validate();
    }
  };
  const validate = () => {
    const valid = validator(input);
    setStatus(valid);
  }

  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={recolor}>
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...{ onChangeText }}
          onBlur={() => validate()}
          {...props}
        />
      </Box>
      {(status === Valid || status === Invalid) && (
        <Box
          alignItems="center"
          marginRight="s"
          height={ICON_SIZE}
          width={ICON_SIZE}
        >
          <Icon name={status === Valid ? 'check' : 'x-circle'} size={16} {...{ color }} />
        </Box>
      )}
    </Box>
  )
}

export default TextField

// const Styles = StyleSheet.create({})
