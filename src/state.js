
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likes: 5 },
      { id: 2, message: 'I want to see you!', likes: 3 },
      { id: 3, message: 'How old are you?', likes: 2 },
      { id: 4, message: 'You are great person :)', likes: 1 },
    ],
    newPostText: 'Hi, how are your?',
  },
  messagesPage: {
    persons: [
      { id: 1, name: 'Stanislav' },
      { id: 2, name: 'Kristina' },
      { id: 3, name: 'Ruslan' },
      { id: 4, name: 'Sergiy' },
      { id: 5, name: 'Oleksand' },
    ],
    messages: [
      { id: 1, message: 'Hello, how are you?' },
      { id: 2, message: 'My favorite job is programming' },
      { id: 3, message: 'I like to study very muchry' },
      { id: 4, message: 'Ben is going to do his homework' },
    ],
  }
}

export const addPost = () => {
  let addOne = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0,
  }
  state.profilePage.posts.push(addOne)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}


export const updatePostText = (text) => {
  state.profilePage.newPostText = text
  rerenderEntireTree(state) 
  }

let rerenderEntireTree = () => {}

export const rewrite = (observer) => {
    rerenderEntireTree = observer
  }


export default state;
