import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":"195176e5-c160-4092-b668-db8c4bfe0154"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id = 2) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    
    unfollow(id = 2) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    } , 
}

export const profileAPI = {   
    auth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login() {
        return instance.get(`auth/login`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);            
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status });            
    },

}


