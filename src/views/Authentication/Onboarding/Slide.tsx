import React from 'react'
import { StyleSheet, View, Dimensions, Image } from 'react-native'
import { Text } from '../../../components';

interface SlideProps {
  label: string;
  picture: number;
  position?: string;
}


const Slide = ({ label, position = "right", picture }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: position === 'right' ? (width / 2 - 50) : (-width / 2 + 50) },
    { rotate: position === 'right' ? '-90deg' : '90deg' },
  ];
  return (
    <View style={Styles.container}>
      <View style={Styles.underlay}>
        <Image source={picture} style={Styles.picture} />
      </View>
      <View style={[Styles.titleContainer, { transform }]}>
        <Text variant="hero">{label}</Text>
      </View>
    </View>
  )
}

export default Slide;


const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;
const Styles = StyleSheet.create({
  container: {
    width: width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SFProText-Bold',
    color: 'white',
    textAlign: 'center',
  },
  underlay: {
    // ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  picture: {
    // ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
})