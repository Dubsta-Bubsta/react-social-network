import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "it's my post?", likesCount: 22 },
    ],
}


test('Post length must be correct', () => {
    let action = addPostActionCreator('newPostText');   
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test('Length after deleteing', () => {
    let action = deletePost(1);   

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});
