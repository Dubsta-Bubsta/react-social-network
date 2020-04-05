import Axios from 'axios';
import { ProfileType, UserType } from '../types/types';

const instance = Axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":"8083a33f-8729-4e32-9005-bfea98db00b1"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
}
export enum ResultCodeForCaptchaEnum {
	CaptchaIsRequired = 10
}
type defaultServerResponse = {
	data: {}
	resultCode: ResultCodesEnum 
	messages: Array<string>
}

type GetUsersType = {
	items: Array<UserType>
	totalCount: number
}
type FollowType = defaultServerResponse
type UnfollowType = defaultServerResponse
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id: number) {
        return instance.post<FollowType>(`follow/${id}`)
            .then(response => response.data)
    },
    
    unfollow(id: number) {
        return instance.delete<UnfollowType>(`follow/${id}`)
            .then(response => response.data)
    } , 
}

type UpdateStatusType = defaultServerResponse;
type SavePhotoType = {
	data: {
		photos: {
			large: string
			small: string
		}
	}
	resultCode: ResultCodesEnum 
	messages: Array<string>
}
export const profileAPI = {   
   
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(response => response.data);            
    },

    updateStatus(status: string) {
        return instance.put<UpdateStatusType>(`profile/status`, { status });            
    },

    savePhoto(file: any) {
        let formData = new FormData();
        formData.append("image", file)
        return instance.put<SavePhotoType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);            
    },
    saveProfile<ProfileType>(profile: ProfileType) {        
        return instance.put(`profile`, profile).then(response => response.data);            
    },
}


type AuthType = {
	data: {
		id: number,
		email: string,
		login: string
	}
	resultCode: ResultCodesEnum 
	messages: Array<string>
}
type LoginType = {
	data: {
		userId: number,
	}
	resultCode: ResultCodesEnum | ResultCodeForCaptchaEnum
	messages: Array<string>
}
type LogoutType = {
	resultCode: ResultCodesEnum
}
export const authAPI = {   
    auth() {
        return instance.get<AuthType>(`auth/me`)
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginType>(`auth/login`, { email, password, rememberMe, captcha })
            .then(response => response.data);
    },
    logout() {
        return instance.delete<LogoutType>(`auth/login`)
            .then(response => response.data);
    },
}


type SecurityType = {
	url: string
}
export const securityAPI = {   
    getCaptcha() {
        return instance.get<SecurityType>(`security/get-captcha-url`)
            .then(response => response.data);
    },   
}
