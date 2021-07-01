import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from '../../../components'

interface FooterProps {
  tagline: string;
  subtitle: string;
  last?: boolean;
  onPress: () => void;
}

const Footer = ({ subtitle, tagline, last, onPress }: FooterProps) => {
  return (
    <View style={Styles.container}>
      <Text variant="title" style={Styles.subtitle}>{subtitle}</Text>
      <Text variant="body" style={Styles.tagline}>{tagline}</Text>
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
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 12,
  },
})
