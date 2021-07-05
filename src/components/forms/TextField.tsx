import React, { forwardRef } from 'react'
import { StyleSheet, TextInput, TextInputProps as RNTextInputProps } from 'react-native'
import theme, { Box } from '../Theme'
import { Feather as Icon } from '@expo/vector-icons';
import RoundedIcon from '../RoundedIcon';

interface TextFieldProps extends RNTextInputProps {
  icon: any;
  touched?: boolean;
  error: string;
  ref: any; //bougie, still needs t change this!
}


const TextField = forwardRef<TextInput, TextFieldProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const ICON_SIZE = theme.borderRadii.m * 2;
    const recolor = !touched
      ? 'darkgray'
      : (error ? 'danger' : 'green');
    const color = theme.colors[recolor];

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
            {...{ ref }}
            {...props}
          />
        </Box>
        {(touched) && (
          <>
            <RoundedIcon
              name={error ? 'x' : 'check'}
              size={ICON_SIZE}
              backgroundColor={error ? 'danger' : 'green'}
              color="white"
            />
          </>
        )}
      </Box>
    )
  })

export default TextField
