import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const MovingText = ({
  text,
  animationThreshold,
  style,
}: {
  text: string;
  animationThreshold: number;
  style: TextStyle;
}) => {
  const translateX = useSharedValue(0); // The value that will be animated, in this case, the x position of the text
  const shouldAnimate = text.length >= animationThreshold; // If the text length is greater than the threshold, the animation will start
  const baseWidthMultiplier = 0.33; // Base multiplier for text width
  const fontSizeAdjustment = 0.5; // Adjustment based on font size

  // Dynamically calculate the text width based on length and font size
  const textWidth = text.length * (baseWidthMultiplier * (style.fontSize || 1));

  console.log('textWidth', textWidth);
  console.log('fontSize', style.fontSize);

  useEffect(() => {
    if (shouldAnimate) {
      // withRepeat is used to repeat the animation, withTiming is used to animate the value, withDelay is used to delay the animation
      // The translateX value is animated from 0 to -textWidth with a duration of 5000ms and linear easing
      translateX.value = withDelay(
        1500,
        withRepeat(
          withTiming(-textWidth, {duration: 5000, easing: Easing.linear}),
          -1, // -1 means infinite loop
          true, // true means reverse the animation
        ),
      );
    }
  }, [translateX, text, animationThreshold]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <Animated.Text
      numberOfLines={1}
      style={[
        animatedStyle,
        style,
        shouldAnimate && {
          paddingLeft: 16,
          overflow: 'hidden',
          width: 9999,
        },
      ]}>
      <Text>{text}</Text>
    </Animated.Text>
  );
};

export default MovingText;

const styles = StyleSheet.create({});
