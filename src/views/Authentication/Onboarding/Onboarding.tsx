import React, { useRef } from 'react'
import { Dimensions } from 'react-native';
import { View, StyleSheet } from 'react-native'
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, { divide, multiply } from 'react-native-reanimated';

import Slide, { SLIDE_HEIGHT } from './Slide';
import Footer from './Footer';
import Dot from './Dot';
import { theme } from '../../../components';
import { Routes, StackNavigationProps } from '../../../Navigation';


const { width } = Dimensions.get('window');


const slides = [
  {
    label: 'Relaxed',
    color: '#BFEAF5',
    position: 'left',
    subtitle: 'Your Styles, Your Way',
    tagline: 'Create your individual and unique styles and look amazing everyday',
    picture: require('../assets/1.jpg'),
  },
  {
    label: 'Playful',
    color: '#BEECC4',
    position: 'right',
    subtitle: 'Find your Outfits',
    tagline: 'Confused about your outfit, Don\'t worry! Find the best outfit here!',
    picture: require('../assets/2.jpg'),
  },
  {
    label: 'Excentric',
    color: '#FFE4D7',
    position: 'left',
    subtitle: 'Hear it First, Wear it First',
    tagline: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    picture: require('../assets/3.jpg'),
  },
  {
    label: 'Funky',
    color: '#FFDDDD',
    position: 'right',
    subtitle: 'Look Good, Feel Good',
    tagline: 'Discover the latest trends in fashion and explore your personality',
    picture: require('../assets/4.jpg'),
  },
]

export const assets = slides.map(slide => slide.picture);

export default function Onboarding({ navigation }: StackNavigationProps<Routes, 'Onboarding'>) {
  const scroll = useRef<Animated.ScrollView>(null);
  // const x = useValue(0);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor: any = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color)
  });
  return (
    <View style={Styles.container}>
      <Animated.View style={[Styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ position, label, picture }, index) => (
            <Slide key={index} {...{ label, position, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={Styles.footer}>
        <Animated.View style={[Styles.overlay, { backgroundColor }]} />
        <View style={Styles.footerContent}>
          <View style={Styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, width)}
                {...{ index }} />
            ))}
          </View>
          <Animated.View style={{
            flex: 1,
            flexDirection: 'row',
            width: width * slides.length,
            transform: [{ translateX: multiply(x, -1) }]
          }}>
            {slides.map(({ subtitle, tagline }, index) => {
              const last = index === slides.length - 1;
              return (
                <Footer
                  key={index}
                  {...{ subtitle, tagline, last }}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    }
                    else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true })
                    }
                  }}
                />
              )
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  )
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'cyan',
  },
  footerContent: {
    flex: 1,
    // width: width * slides.length,
    // flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: 'row',
    // width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
})