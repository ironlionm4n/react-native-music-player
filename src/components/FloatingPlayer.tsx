import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fontFamilies, fontSizes} from '../constants/fonts';
import {colors} from '../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Slider} from 'react-native-awesome-slider';
import {useSharedValue} from 'react-native-reanimated';
import MovingText from './MovingText';
import {useNavigation} from '@react-navigation/native';

const FloatingPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const navigation = useNavigation();
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  const progress = useSharedValue(0.5);

  const handlePlayPausePress = () => {
    setIsPlaying(!isPlaying);
  };

  const handleOpenPlayerScreen = () => {
    // Open Player Screen
    navigation.navigate('Player');
  };

  return (
    <View>
      <Slider
        style={{width: '95%', alignSelf: 'center'}}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        theme={{
          maximumTrackTintColor: colors.maxTintColor,
          minimumTrackTintColor: colors.minTintColor,
        }}
        containerStyle={{height: 8, width: '100%', borderRadius: 4}}
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
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.85}
        onPress={handleOpenPlayerScreen}>
        <Image
          source={{
            uri: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/733/325x325/follow-back-1722556857-SviEzbx69z.jpg',
          }}
          style={{width: 60, aspectRatio: 1, borderRadius: 6}}
        />
        <View style={styles.songDetails}>
          <MovingText
            text="Song Name that ;lksdjf "
            animationThreshold={20}
            style={styles.songTitle}
          />
          {/* <Text style={styles.songTitle}>
            Song Name that is way to long to fitf
          </Text> */}
          <Text style={styles.artistTitle}>Artist Name</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.touchableIcon}
            onPress={() => Alert.alert('Previous')}
            activeOpacity={0.85}>
            <Entypo
              name="controller-jump-to-start"
              size={fontSizes.extraLarge}
              color={colors.textPrimary}
              style={styles.iconButton}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableIcon}
            onPress={() => {
              handlePlayPausePress();
            }}
            activeOpacity={0.85}>
            <Entypo
              name={isPlaying ? 'controller-paus' : 'controller-play'}
              size={fontSizes.extraLarge}
              color={colors.textPrimary}
              style={styles.iconButton}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableIcon}
            onPress={() => Alert.alert('Next')}
            activeOpacity={0.85}>
            <Entypo
              name="controller-next"
              size={fontSizes.extraLarge}
              color={colors.textPrimary}
              style={styles.iconButton}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    marginTop: 10,
  },
  songDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  songTitle: {
    fontSize: fontSizes.large,
    fontFamily: fontFamilies.medium,
    color: colors.textPrimary,
  },
  artistTitle: {
    fontSize: fontSizes.medium,
    fontFamily: fontFamilies.light,
    color: colors.textPrimary,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 2,
  },
  iconButton: {
    width: 50,
    justifyContent: 'center',
    textAlign: 'center',
  },
  touchableIcon: {
    width: 50,
    height: 25,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
