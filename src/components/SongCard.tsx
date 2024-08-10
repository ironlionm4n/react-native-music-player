import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {imageSizes, spacing} from '../constants/dimensions';
import {fontFamilies, fontSizes} from '../constants/fonts';

const SongCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/733/325x325/follow-back-1722556857-SviEzbx69z.jpg',
        }}
        style={styles.coverImage}
      />
      <Text style={styles.title}>Song Name</Text>
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
  title: {
    fontSize: fontSizes.large,
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    padding: spacing.small,
  },
  artist: {
    fontSize: fontSizes.medium,
    color: colors.textSecondary,
    fontFamily: fontFamilies.regular,
  },
  coverImage: {
    width: imageSizes.medium,
    height: imageSizes.medium,
    borderRadius: 10,
  },
});
