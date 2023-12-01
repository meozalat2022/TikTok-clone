import {StyleSheet, FlatList, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Posts from '../../components/Posts';
import posts from '../../../data/posts';
const Home = () => {
  return (
    <View>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        renderItem={({item}) => {
          return <Posts post={item} />;
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
