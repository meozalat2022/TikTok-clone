import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Posts = props => {
  //   const {post} = props;
  const [paused, setPaused] = useState(false);
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const onPlayPausePress = () => {
    setPaused(prev => !prev);
  };
  const onLikePressed = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({...post, likes: post.likes + likesToAdd});
    setIsLiked(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{
              uri: post.videoUri,
            }}
            style={styles.video}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightComponent}>
              <View style={styles.userProfileView}>
                <Image
                  style={styles.userImage}
                  source={{uri: post.user.imageUri}}
                />
              </View>
              <TouchableOpacity
                onPress={onLikePressed}
                style={styles.iconContainer}>
                <AntDesign
                  name={'heart'}
                  size={24}
                  color={isLiked ? 'red' : 'white'}
                />
                <Text style={styles.label}>{post.likes}</Text>
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={24} color="white" />
                <Text style={styles.label}>{post.comments}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={24} color="white" />
                <Text style={styles.label}>{post.shares}</Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.creator}>{post.username}</Text>
                <Text style={styles.description}>{post.description}</Text>
                <View style={styles.songView}>
                  {/* icon */}
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  {/* name */}
                  <Text style={styles.songName}>{post.song.name}</Text>
                </View>
              </View>
              <View>
                <Image
                  style={styles.songImage}
                  source={{uri: post.song.imageUri}}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 50,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoPlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  creator: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#fff',
  },
  rightComponent: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 3,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 2,
  },
  iconContainer: {
    alignItems: 'center',
  },
});
