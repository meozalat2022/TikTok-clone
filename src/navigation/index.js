import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeBottomTabNavigator from './HomeBottomNavigator';
import CreatePost from '../screens/createPost';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Feeds"
          component={HomeBottomTabNavigator}
        />
        <Stack.Screen
          options={{
            title: 'Post',
          }}
          name="CreatePost"
          component={CreatePost}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
