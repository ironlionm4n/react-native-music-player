import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {imageSizes, spacing} from '../constants/dimensions';
import {fontFamilies, fontSizes} from '../constants/fonts';

const SongCard = ({isLikedCard}: {isLikedCard: boolean}) => {
  return (
    <TouchableOpacity
      style={isLikedCard ? styles.likedContainer : styles.container}>
      <Image
        source={{
          uri: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/733/325x325/follow-back-1722556857-SviEzbx69z.jpg',
        }}
        style={isLikedCard ? styles.likedImage : styles.defaultImage}
      />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        Song Name thaklras d;asjf;ksj; js
      </Text>
      <Text style={styles.artist}>Artist Name</Text>
    </TouchableOpacity>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: 275,
  },
  likedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: 275,
    width: '45%',
  },
  title: {
    fontSize: fontSizes.large,
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    padding: spacing.small,
    overflow: 'hidden',
    maxWidth: '100%',
    textAlign: 'center',
  },
  artist: {
    fontSize: fontSizes.medium,
    color: colors.textSecondary,
    fontFamily: fontFamilies.regular,
  },
  defaultImage: {
    width: imageSizes.medium,
    height: imageSizes.medium,
    borderRadius: 10,
  },
  likedImage: {
    width: imageSizes.small,
    height: imageSizes.small,
    borderRadius: 10,
  },
});
