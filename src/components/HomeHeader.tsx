import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {iconSizes, spacing} from '../constants/dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation();
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
          Alert.alert(
            'Search button pressed', // title
            'Search functionality coming soon', // message
            [
              {
                text: 'OK', // button with text
                onPress: () => {
                  console.log('hello');
                  navigation.navigate('Liked'); // action on press
                }, // action on press
              },
            ],
          );
        }}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: spacing.medium,
    paddingTop: spacing.xsmall,
    borderBottomColor: colors.textPrimary,
    borderBottomWidth: 0.5,
  },
});
