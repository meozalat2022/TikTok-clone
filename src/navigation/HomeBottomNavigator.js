import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Upload from '../screens/Upload';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {backgroundColor: '#000'},
        tabBarStyle: [{display: 'flex'}],
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={25} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'search1'} size={25} color={color} />
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'upload'} size={25} color={color} />
          ),
        }}
        name="Upload"
        component={Upload}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              size={25}
              color={color}
            />
          ),
        }}
        name="Inbox"
        component={Inbox}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-outline'} size={25} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;

const styles = StyleSheet.create({});
