import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';

const Upload = () => {
  const navigation = useNavigation();
  const [isRecording, setIsRecording] = useState(false);
  const [videoPath, setVideoPath] = useState('');
  const camera = useRef();

  const recordVideo = async () => {
    if (isRecording) {
      camera.current.stopRecording();
    } else {
      const data = await camera.current.recordAsync();
      setVideoPath(data.uri);
      navigation.navigate('CreatePost', {videoUri: data.uri});
    }
  };
  console.log(videoPath);
  return (
    <View style={{flex: 1}}>
      <RNCamera
        onRecordingStart={() => setIsRecording(true)}
        onRecordingEnd={() => setIsRecording(false)}
        style={StyleSheet.absoluteFill}
        ref={camera}
      />
      <TouchableOpacity
        onPress={recordVideo}
        style={
          !isRecording ? styles.onRecordVideo : styles.onStopVideo
        }></TouchableOpacity>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  onRecordVideo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  onStopVideo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});
