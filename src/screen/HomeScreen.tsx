import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import Header from '../components/Header';
import {spacing} from '../constants/dimensions';
import {fontFamilies, fontSizes} from '../constants/fonts';
import SongCard from '../components/SongCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Recommended for you</Text>
      <ScrollView
        style={styles.scrollingContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollingContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  contentContainer: {
    paddingHorizontal: spacing.medium,
    backgroundColor: 'green',
  },
  text: {
    color: colors.textPrimary,
  },
  title: {
    fontSize: fontSizes.extraLarge,
    color: colors.textPrimary,
    padding: spacing.medium,
    fontFamily: fontFamilies.bold,
  },
});
