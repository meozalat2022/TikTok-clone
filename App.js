/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet, View, StatusBar} from 'react-native';
import Home from './src/screens/Home';
import Navigation from './src/navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
