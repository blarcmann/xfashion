import React from 'react'
import { StyleSheet, Text, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@shopify/restyle';
import { Theme } from './Theme';

interface ButtonProps {
  label: string;
  variant: 'default' | 'primary';
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor = variant === 'primary' ? theme.colors.greenBg : theme.colors.lightGrayBg;
  const color = variant === 'primary' ? theme.colors.white : theme.colors.title;

  return (
    <RectButton
      style={[Styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[Styles.label, { color }]}>{label}</Text>
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
