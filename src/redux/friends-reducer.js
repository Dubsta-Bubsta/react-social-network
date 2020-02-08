let initialState = {
    friends: [
        { id: 1, name: 'Andrew', sername: 'Ivanov', age: 19, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg' },
        { id: 2, name: 'Vasily', sername: 'Popov', age: 15, img: 'https://avatars.mds.yandex.net/get-pdb/25978/a3cadcfd-caea-42d2-8dc5-ee0a3cbe086f/s1200' },
        { id: 3, name: 'Ivan', sername: 'Patapov', age: 21, img: 'https://avatars.mds.yandex.net/get-pdb/905548/88ae35b9-4348-4fd1-838e-6f15e28d8f3a/s1200' },
        { id: 4, name: 'Dmitriy', sername: 'Koselev', age: 25, img: 'https://avatars.mds.yandex.net/get-pdb/234183/4a6185d8-63bd-4d50-9a36-195f7f5c4288/s1200?webp=false' },
    ],
}


const friendsReducer = (state = initialState, action) => {
    switch (action.type) { 
        
        default:
            return state;
    }
}

export default friendsReducer;