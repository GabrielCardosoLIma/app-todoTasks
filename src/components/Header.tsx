import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import logoImg from '../assets/images/logo/todoimg.png';

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 4,
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 36,
  }
});