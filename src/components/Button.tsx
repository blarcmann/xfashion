import React, { ReactNode } from 'react'
import { StyleSheet, Text, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@shopify/restyle';
import { Theme } from './Theme';

interface ButtonProps {
  label?: string;
  variant: 'default' | 'primary' | 'transparent';
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({ label, variant, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();
  let backgroundColor = theme.colors.lightgray;
  let color = theme.colors.secondary;

  switch (variant) {
    case 'primary':
      backgroundColor = theme.colors.green
      color = theme.colors.white
      break;
    case 'transparent':
      backgroundColor = 'transparent'
      color = theme.colors.secondary
      break;

    default:
      backgroundColor = theme.colors.lightgray
      color = theme.colors.secondary
      break;
  }

  return (
    <RectButton
      style={[Styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? children : <Text style={[Styles.label, { color }]}>{label}</Text>}
    </RectButton>
  )
}

Button.defaultProps = { variant: 'default' };

export default Button

const { width } = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    height: 52,
    width: width * 0.9,
    maxWidth: 300,
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
  },
})
