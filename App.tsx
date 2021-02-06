import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.outerView}>
      <View style={styles.middleView}>
        <View style={styles.container}>
          <Text style={styles.text}>#crushingit</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60f692',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#f00',
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 40
  },
  outerView: {
    flex: 1,
    backgroundColor: '#f00',
    padding: 20
  },
  middleView: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20
  }
});
