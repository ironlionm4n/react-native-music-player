import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import Header from '../components/Header';
import {spacing} from '../constants/dimensions';
import {fontFamilies, fontSizes} from '../constants/fonts';
import SongCard from '../components/SongCard';
import SongCarousel from '../components/SongCarousel';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SongCarousel headerText="Recommended for you" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
