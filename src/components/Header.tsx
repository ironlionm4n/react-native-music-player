import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {iconSizes, spacing} from '../constants/dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../constants/colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <Entypo.Button
        name="menu"
        size={iconSizes.medium}
        color={colors.iconPrimary}
        backgroundColor={colors.background}
        onPress={() => {
          Alert.alert('Menu button pressed');
        }}
      />
      <Entypo.Button
        name="magnifying-glass"
        size={iconSizes.medium}
        color={colors.iconPrimary}
        backgroundColor={colors.background}
        onPress={() => {
          Alert.alert('Search button pressed');
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: spacing.medium,
    paddingTop: spacing.medium,
    borderBottomColor: colors.textPrimary,
    borderBottomWidth: 0.5,
  },
});
