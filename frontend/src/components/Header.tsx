import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Map</Text>
      <Text style={styles.headerDescription}>Brief description of map features</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontFamily: 'Inter',
    fontSize: 36,
    fontWeight: '400',
    lineHeight: 43.57,
    textAlign: 'center',
    color: '#1E1E1E',
    marginBottom: 9,
  },
  headerDescription: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18.15,
    textAlign: 'center',
    color: '#1E1E1E',
  },
});

export default Header;
