import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import Animated from 'react-native-reanimated'
import { Button } from '../../../../components'

interface FooterProps {
  tagline: string;
  subtitle: string;
  last?: boolean;
  onPress: () => void;
}

const Footer = ({ subtitle, tagline, last, onPress }: FooterProps) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.subtitle}>{subtitle}</Text>
      <Text style={Styles.tagline}>{tagline}</Text>
      <Button
        label={last ? 'Let\'s get started' : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  )
}

export default Footer

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  tagline: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    color: '#0C0D34',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 12,
  },
})
