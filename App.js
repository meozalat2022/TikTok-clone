/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

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
import {getCurrentUser, fetchAuthSession} from 'aws-amplify/auth';
import {createUser} from './src//graphql/mutations';
import {getUser} from './src/graphql/queries';
import config from './src/amplifyconfiguration.json';
Amplify.configure(config);

const client = generateClient();

function App({signOut, user}) {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        //getcurrent authenticated user
        const {userId, username} = await getCurrentUser({});

        const {accessToken, idToken} = (await fetchAuthSession()).tokens ?? {};
        console.log(idToken.payload.email);
        const existingUser = await client.graphql({
          query: getUser,
          variables: {id: userId},
        });
        //check if current auth user exists
        if (existingUser === null) {
          return;
          //if not create new user
        } else {
          const newUser = {
            id: userId,
            username: username,
            email: idToken.payload.email,
            imageUri:
              'https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
          };
          await client.graphql({
            query: createUser,
            variables: {input: newUser},
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
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
