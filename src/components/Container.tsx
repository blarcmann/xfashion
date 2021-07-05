import React from 'react'
import { ReactNode } from 'react'
import { StyleSheet, Image, Dimensions, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Constants from "expo-constants";
import theme, { Box } from '../components/Theme'

export const assets = [
  require('./assets/images/patterns/0.png'),
  require('./assets/images/patterns/1.png'),
  require('./assets/images/patterns/2.png'),
] as const;
const aspectRatio = 920 / 1600;
const { width, height: wHeight } = Dimensions.get('window');
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}


const Container = ({ children, footer, pattern }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const asset = assets[pattern]
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)} backgroundColor="secondary">
        {/* <StatusBar barStyle="light-content" /> */} 
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image source={asset} style={Styles.pattern} />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image source={asset}
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
    </KeyboardAwareScrollView>
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
