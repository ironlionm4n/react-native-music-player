import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import LikedHeader from '../components/LikedHeader';
import {fontFamilies, fontSizes} from '../constants/fonts';
import {spacing} from '../constants/dimensions';
import SongCard from '../components/SongCard';
import FloatingPlayer from '../components/FloatingPlayer';

const LikedScreen = () => {
  return (
    <View style={styles.container}>
      <LikedHeader />
      <Text style={styles.title}>Liked Songs</Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={item => <SongCard isLikedCard={true} />}
        numColumns={2}
        scrollEnabled={true}
        contentContainerStyle={styles.cardContainer}
        columnWrapperStyle={{gap: spacing.large}}
      />
      <FloatingPlayer />
    </View>
  );
};

export default LikedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: fontSizes.extraLarge,
    color: colors.textPrimary,
    padding: spacing.medium,
    fontFamily: fontFamilies.bold,
  },
  cardContainer: {
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
