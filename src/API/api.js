import axios from 'axios';

// const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create(
   {
      withCredentials: true,
      headers: { "API-KEY": "3733710f-a079-4098-b86b-08f7856ef322" },
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',             // URL с большой буквы
   }
)

export const getUsers = (currentPage, pageSize) => {
   return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data
         })
   )
}

export const getAuth = () => {
   return (
      instance.get(`auth/me`)
         .then(response => {
            return response.data
         })
   )
}

export const getProfileOfUser = (id) => {
   return (
      instance.get(`profile/${id}`)
         .then(response => {
            return response.data
         })
   )
}

export const getStatusOfUser = (id) => {
   return (
      instance.get(`profile/status/${id}`)
         .then(response => {
            return response.data
         })
   )
}

export const updateStatusOfUser = (status) => {
   return (
      instance.put(`profile/status`, { status: status })
         .then(response => {
            return response.data
         })
   )
}

export const deleteUnfollowUser = (id) => {
   return (
      instance.delete(`follow/${id}`)
         .then(response => {
            return response.data
         })
   )
}

export const postFollowUser = (id) => {
   return (
      instance.post(`follow/${id}`, {})
         .then(response => {
            return response.data
         })
   )
}

export const logIn = (email, password, rememberMe = false) => {
   return (
      instance.post(`auth/login`, {email,password,rememberMe})
         .then(response => {
            return response.data
         })
   )
}

export const logOut = () => {
   return (
      instance.delete(`auth/login`)
         .then(response => {
            return response.data
         })
   )
}
