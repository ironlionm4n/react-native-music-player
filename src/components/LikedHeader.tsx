import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {iconSizes, spacing} from '../constants/dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const LikedHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Entypo.Button
        name="arrow-long-left"
        size={iconSizes.medium}
        color={colors.iconPrimary}
        backgroundColor={colors.background}
        onPress={() => {
          if (navigation.canGoBack()) navigation.goBack();
        }}
      />
      <Entypo.Button
        name="sound-mix"
        size={iconSizes.small}
        color={colors.iconPrimary}
        backgroundColor={colors.background}
        onPress={() => {
          Alert.alert('Sound Mix button pressed');
        }}
      />
    </View>
  );
};

export default LikedHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: spacing.medium,
    paddingTop: spacing.xsmall,
    borderBottomColor: colors.textPrimary,
    borderBottomWidth: 0.5,
  },
});
