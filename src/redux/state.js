let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It is my first post', likesCount: 20}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Elena'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: "Hi, you are awesome!"},
            {id: 2, message: "I love you"},
            {id: 3, message: "You are perfect!"},
            {id: 4, message: "You are clever!"},
            {id: 5, message: "You are good backend-developer!"},
            {id: 6, message: "You've made great bot!"}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, friend: "Lenko"},
            {id: 1, friend: "Dima"}
        ]
    }
}

export default state;
