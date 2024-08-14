import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing} from '../constants/dimensions';
import {fontFamilies, fontSizes} from '../constants/fonts';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import {colors} from '../constants/colors';

const PlayerProgressBar = () => {
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  return (
    <View>
      <View style={styles.timeRow}>
        <Text style={styles.text}>0:00</Text>
        <Text style={styles.text}>4:00</Text>
      </View>
      <Slider
        style={styles.sliderContainer}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        containerStyle={{
          height: 7,
          borderRadius: spacing.small,
        }}
        theme={{
          maximumTrackTintColor: colors.maxTintColor,
          minimumTrackTintColor: colors.minTintColor,
        }}
        renderThumb={() => (
          // <Ionicons name="headset" size={20} color={colors.iconPrimary} />
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 20,
              backgroundColor: colors.textSecondary,
            }}
          />
        )}
      />
    </View>
  );
};

export default PlayerProgressBar;

const styles = StyleSheet.create({
  sliderContainer: {
    marginVertical: 28,
    width: '95%',
    alignSelf: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: spacing.medium,
    alignItems: 'center',
    marginTop: spacing.xlarge,
  },
  text: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.medium,
    opacity: 0.66,
  },
});
