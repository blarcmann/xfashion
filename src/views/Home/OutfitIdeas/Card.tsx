import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { add } from 'react-native-reanimated';
import { mix, usePanGestureHandler, withSpring } from 'react-native-redash';
import { Box } from '../../../components/Theme';


const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.8;
const height = width * (16 / 9);
const borderRadius = 16;

interface CardProps {
  position: Animated.Adaptable<number>;
}
const Card = ({ position }: CardProps) => {
  const { gestureHandler, translation, velocity, state } = usePanGestureHandler();
  const backgroundColor = '#C9E9E7';
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-width, 0, width]
  })

  const translateY = add(translateYOffset, withSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [0]
  }))

  return (
    <Box style={Styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={{
          width, height, borderRadius, backgroundColor,
          transform: [{ translateY }, { translateX }, { scale }]
        }} />
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
