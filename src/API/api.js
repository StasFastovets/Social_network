import axios from 'axios';

// const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create(
   { withCredentials: true, 
     headers: {"API-KEY":"96d675d8-0b5d-41f7-b5f7-def38154af97"},
     baseURL: 'https://social-network.samuraijs.com/api/1.0/', }        // URL с большой буквы
)

export const getUsers = (currentPage = 1, pageSize = 10) => { 
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