let rerenderEntireTree = () => {
    
}
let state = {
    dialogsPage: {
        messages: [
            { id: 1, message: "Fisrst message" },
            { id: 2, message: "Second message" },
            { id: 3, message: "Third message" },
        ],
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Misha' },
            { id: 4, name: 'Mark' },
        ],
        newMessageText: 'New message Text',
    },
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "it's my post?", likesCount: 22 },
        ],
        newPostText : 'New post text',
    },
    siteBar: {
        friends: [
            { id: 1, name: 'Andrew', sername: 'Ivanov', age: 19, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg' },
            { id: 2, name: 'Vasily', sername: 'Popov', age: 15, img: 'http://www.webpark.ru/uploads54/110818/Portraits_04.jpg' },
            { id: 3, name: 'Ivan', sername: 'Patapov', age: 21, img: 'https://avatars.mds.yandex.net/get-pdb/905548/88ae35b9-4348-4fd1-838e-6f15e28d8f3a/s1200' },
            { id: 4, name: 'Dmitriy', sername: 'Koselev', age: 25, img: 'https://avatars.mds.yandex.net/get-pdb/234183/4a6185d8-63bd-4d50-9a36-195f7f5c4288/s1200?webp=false' },
        ],
    },

};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export const sendMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,        
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';

    rerenderEntireTree(state);
}
export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}


export const subcribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;