import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import Header from '../components/Header';
import {spacing} from '../constants/dimensions';
import {fontFamilies, fontSizes} from '../constants/fonts';
import SongCard from '../components/SongCard';
import SongCarousel from '../components/SongCarousel';
import FloatingPlayer from '../components/FloatingPlayer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={[
          {headerText: 'Recommended for you'},
          {headerText: 'My Playlist'},
          {headerText: 'Recently Played'},
          {headerText: 'Top Charts'},
        ]}
        renderItem={item => <SongCarousel headerText={item.item.headerText} />}
        contentContainerStyle={{paddingVertical: spacing.large}}
      />
      <FloatingPlayer />
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
