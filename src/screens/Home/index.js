import {StyleSheet, FlatList, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Posts from '../../components/Posts';
// import posts from '../../../data/posts';
import {generateClient} from 'aws-amplify/api';
import {listPosts} from '../../graphql/queries';
const Home = () => {
  const [posts, setPosts] = useState();
  const client = generateClient();
  useEffect(() => {
    const fetChPosts = async () => {
      try {
        const response = await client.graphql({query: listPosts});
        setPosts(response.data.listPosts.items);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetChPosts();
  }, []);
  console.log(posts);

  return (
    <View>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 50}
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
