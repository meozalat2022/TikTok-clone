/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      posts {
        items {
          id
          description
          videoUri
          songID
          song {
            id
            name
            imageUri
            createdAt
            updatedAt
            __typename
          }
          userID
          user {
            id
            username
            email
            imageUri
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      imageUri
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        posts {
          items {
            id
            description
            videoUri
            songID
            userID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        imageUri
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      name
      imageUri
      posts {
        items {
          id
          description
          videoUri
          songID
          song {
            id
            name
            imageUri
            createdAt
            updatedAt
            __typename
          }
          userID
          user {
            id
            username
            email
            imageUri
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        posts {
          items {
            id
            description
            videoUri
            songID
            userID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      description
      videoUri
      songID
      song {
        id
        name
        imageUri
        posts {
          items {
            id
            description
            videoUri
            songID
            userID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userID
      user {
        id
        username
        email
        posts {
          items {
            id
            description
            videoUri
            songID
            userID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        imageUri
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        videoUri
        songID
        song {
          id
          name
          imageUri
          posts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userID
        user {
          id
          username
          email
          posts {
            nextToken
            __typename
          }
          imageUri
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsBySongID = /* GraphQL */ `
  query PostsBySongID(
    $songID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsBySongID(
      songID: $songID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        videoUri
        songID
        song {
          id
          name
          imageUri
          posts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userID
        user {
          id
          username
          email
          posts {
            nextToken
            __typename
          }
          imageUri
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByUserID = /* GraphQL */ `
  query PostsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        videoUri
        songID
        song {
          id
          name
          imageUri
          posts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userID
        user {
          id
          username
          email
          posts {
            nextToken
            __typename
          }
          imageUri
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
