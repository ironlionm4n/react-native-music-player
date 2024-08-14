import {
  Alert,
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontFamilies, fontSizes} from '../constants/fonts';
import {borderRadii, iconSizes, spacing} from '../constants/dimensions';
import PlayerProgressBar from '../components/PlayerProgressBar';
import {useNavigation} from '@react-navigation/native';
const PlayerScreen = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const navigation = useNavigation();

  function handleLikeUnlike(event: GestureResponderEvent): void {
    setIsLiked(!isLiked);
  }

  function handleMuteUnMute(event: GestureResponderEvent): void {
    setIsMute(!isMute);
  }

  function handleRepeatPressed(event: GestureResponderEvent): void {
    setIsRepeat(!isRepeat);
  }

  function handleShufflePressed(event: GestureResponderEvent): void {
    setIsShuffle(!isShuffle);
  }

  function handlePlayPausePress(): void {
    setIsPlaying(!isPlaying);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo.Button
          name="arrow-long-left"
          size={20}
          color={colors.iconPrimary}
          backgroundColor={colors.background}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.nowPlaying}>Now Playing</Text>
      </View>
      <View style={styles.coverImageContainer}>
        <Image
          source={{
            uri: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/733/325x325/follow-back-1722556857-SviEzbx69z.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.rowContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.songTitle}>Believer</Text>
            <Text style={styles.artistName}>Imagine Dragon</Text>
          </View>
          <TouchableOpacity onPress={handleLikeUnlike} activeOpacity={0.8}>
            <Entypo
              name={isLiked ? 'heart' : 'heart-outlined'}
              size={iconSizes.medium}
              color={isLiked ? 'red' : colors.iconSecondary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.playerControlContainer}>
          <TouchableOpacity onPress={handleMuteUnMute} activeOpacity={0.85}>
            {isMute ? (
              <Ionicons
                name="volume-mute-outline"
                size={iconSizes.medium}
                color={colors.iconSecondary}
              />
            ) : (
              <SimpleLineIcons
                name={isMute ? 'volume-mute-outline' : 'volume-1'}
                size={iconSizes.medium}
                color={isMute ? colors.iconSecondary : colors.iconPrimary}
              />
            )}
          </TouchableOpacity>
          <View style={styles.playerControlInnerContainer}>
            <TouchableOpacity
              onPress={handleRepeatPressed}
              activeOpacity={0.85}>
              <MaterialCommunityIcons
                name={isRepeat ? 'repeat' : 'repeat-off'}
                size={iconSizes.medium}
                color={isRepeat ? colors.iconPrimary : colors.iconSecondary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleShufflePressed}>
              <MaterialCommunityIcons
                name={isShuffle ? 'shuffle' : 'shuffle-disabled'}
                size={iconSizes.medium}
                color={isShuffle ? colors.iconPrimary : colors.iconSecondary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <PlayerProgressBar />
      <View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.touchableIcon}
            onPress={() => Alert.alert('Previous')}
            activeOpacity={0.85}>
            <Entypo
              name="controller-jump-to-start"
              size={42}
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
              size={42}
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
              size={42}
              color={colors.textPrimary}
              style={styles.iconButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.small,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: spacing.small,
  },
  nowPlaying: {
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    width: '75%',
    textAlign: 'center',
    fontSize: fontSizes.large,
  },
  image: {
    width: '75%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: borderRadii.large,
  },
  coverImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.large,
  },
  songTitle: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.extraLarge,
    color: colors.textPrimary,
  },
  artistName: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.large,
    color: colors.textSecondary,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.medium,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: spacing.large,
    marginTop: spacing.xlarge,
  },
  playerControlInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.large,
  },
  playPauseContainer: {},
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xlarge,
    paddingTop: spacing.large,
  },
  iconButton: {
    width: 50,
    justifyContent: 'center',
    textAlign: 'center',
  },
  touchableIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
