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
import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';
import config from './src/amplifyconfiguration.json';
Amplify.configure(config);

const client = generateClient();

function App({signOut, user}) {
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

export default withAuthenticator(App);
