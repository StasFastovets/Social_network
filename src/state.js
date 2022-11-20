
let store = {

  _state : {
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
  },

  addPost() {
    let addOne = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likes: 0,
    }
    this._state.profilePage.posts.push(addOne)
    this._state.profilePage.newPostText = ''
    this.rerenderEntireTree()
  },

  updatePostText(text) {
    this._state.profilePage.newPostText = text
    this.rerenderEntireTree() 
    },

  rerenderEntireTree() {},

  rewrite(observer) {
    this.rerenderEntireTree = observer
  },

  getState(){
    return this._state
  }
}


export default store;
