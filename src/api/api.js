import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":"8083a33f-8729-4e32-9005-bfea98db00b1"
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

    savePhoto(file) {
        let formData = new FormData();
        formData.append("image", file)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);            
    },
    saveProfile(profile) {        
        return instance.put(`profile`, profile).then(response => response.data);            
    },
}


export const authAPI = {   
    auth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password,rememberMe = false, captcha) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    },
}
export const securityAPI = {   
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data);
    },   
}

