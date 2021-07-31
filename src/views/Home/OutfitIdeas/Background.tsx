import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import theme, { Box } from '../../../components/Theme'
import { assets } from '../../../components/Container';

const Background = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="secondary">
        <Box flex={1} backgroundColor="white" borderBottomRightRadius="xl" />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="secondary"/>
        <Image source={assets[2]} style={Styles.image} />
      </Box>
      <Box flex={1 / 3} backgroundColor="secondary">
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
      </Box>
    </View>
  )
}

const Styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
    borderBottomRightRadius: theme.borderRadii.xl,
  }
})


export default Background

