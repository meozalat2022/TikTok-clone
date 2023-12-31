/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
    onCreateSong(filter: $filter) {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
    onUpdateSong(filter: $filter) {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
    onDeleteSong(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
