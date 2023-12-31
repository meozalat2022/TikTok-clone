// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Song, Post } = initSchema(schema);

export {
  User,
  Song,
  Post
};