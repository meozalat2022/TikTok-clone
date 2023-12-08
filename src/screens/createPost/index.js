import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {uploadData, getUrl} from 'aws-amplify/storage';
import {v4 as uuidv4} from 'uuid';
import {createPost} from '../../graphql/mutations';
import {generateClient} from 'aws-amplify/api';
import {getCurrentUser} from 'aws-amplify/auth';

const CreatePost = ({route}) => {
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const videoPath = route.params.videoUri;
  const client = generateClient();
  const uploadVideo = async imagePath => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      const result = await uploadData({
        key: `${uuidv4()}.mp4`,
        data: blob,
      }).result;
      console.log('Succeeded: ', result);
      const getUrlResult = await getUrl({
        key: result.key,
      });
      setVideoUrl(getUrlResult.url);
    } catch (error) {
      console.log('Error : ', error);
    }
  };
  const publish = async () => {
    const {userId, username} = await getCurrentUser({});

    const newPost = {
      description,
      videoUri: videoUrl,
      songID: 'e24274ee-b142-4ece-b1b7-efee182eb1fb',
      userID: userId,
    };
    await client.graphql({
      query: createPost,
      variables: {input: newPost},
    });
  };
  useEffect(() => {
    uploadVideo(videoPath);
  }, [videoPath]);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          publish();
        }}
        style={styles.publishPost}>
        <Text style={styles.publishText}>Publish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  publishPost: {
    backgroundColor: 'red',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  publishText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
