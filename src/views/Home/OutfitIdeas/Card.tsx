import React from 'react';
import { StyleSheet, Dimensions, ImageRequireSource, Image } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { add } from 'react-native-reanimated';
import { mix, usePanGestureHandler } from 'react-native-redash';
import { Box } from '../../../components/Theme';
import { useSpring } from './Animations';


const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.8;
const height = width * (16 / 9);
const borderRadius = 16;


interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
}
const Card = ({ position, onSwipe, source }: CardProps) => {
  const { gestureHandler, translation, velocity, state } = usePanGestureHandler();
  const backgroundColor = '#C9E9E7';
  const translateYOffset = mix(position, 0, -40);
  const scale = mix(position, 1, 0.9);
  // const imageScale: any = interpolateNode(position, {
  //   inputRange: [0, position],
  //   outputRange: [1, 0.8],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe()
  })

  const translateY = add(translateYOffset, useSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [0],
    onSnap: () => console.log(), // investigate this
  }))

  return (
    <Box style={Styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={{
          width, height, borderRadius, backgroundColor,
          transform: [{ translateY }, { translateX }, { scale }],
          overflow: 'hidden'
        }}>
          <Image {...{ source }} style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  )
}

export default Card;

const Styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
