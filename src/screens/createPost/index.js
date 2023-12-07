import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {uploadData} from 'aws-amplify/storage';
import {v4 as uuidv4} from 'uuid';
const CreatePost = ({route}) => {
  const [description, setDescription] = useState('');
  const videoPath = route.params.videoUri;
  console.log(videoPath);

  const uploadVideo = async imagePath => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      console.log('111111111111111', blob);
      const result = await uploadData({
        key: `${uuidv4()}.mp4`,
        data: blob,
      }).result;
      console.log('Succeeded: ', result);
    } catch (error) {
      console.log('Error : ', error);
    }
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
      <TouchableOpacity style={styles.publishPost}>
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
