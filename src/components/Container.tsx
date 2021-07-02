import React from 'react'
import { ReactNode } from 'react'
import { StyleSheet, Image, Dimensions, StatusBar } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import theme, { Box } from './Theme'

export const assets = [require('./assets/images/patterns/taieri.png')];
const aspectRatio = 920 / 1600;
const { width } = Dimensions.get('window');
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}


const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image source={assets[0]} style={Styles.pattern} />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image source={assets[0]}
          style={[{ width, height, ...StyleSheet.absoluteFillObject, top: -height * 0.61 }]}
        />
        <Box flex={1} backgroundColor="white" borderRadius="xl" borderTopLeftRadius="none">
          {children}
        </Box>
      </Box>
      <Box style={Styles.footer}>
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  )
}

export default Container

const Styles = StyleSheet.create({
  pattern: {
    width,
    height,
    borderBottomLeftRadius: theme.borderRadii.xl,
  },
  footer: {
    paddingTop: theme.spacing.m,
    backgroundColor: theme.colors.secondary,
  }
})
