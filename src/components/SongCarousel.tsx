import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {spacing} from '../constants/dimensions';
import {fontSizes, fontFamilies} from '../constants/fonts';
import Header from './Header';
import SongCard from './SongCard';

interface SongCarouselProps {
  headerText: string;
}

const SongCarousel = ({headerText}: SongCarouselProps) => {
  return (
    <View>
      <Text style={styles.title}>{headerText}</Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <SongCard />}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: spacing.medium}} />}
        contentContainerStyle={{paddingHorizontal: spacing.medium}}
      />
    </View>
  );
};

export default SongCarousel;

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.extraLarge,
    color: colors.textPrimary,
    padding: spacing.medium,
    fontFamily: fontFamilies.bold,
  },
});
