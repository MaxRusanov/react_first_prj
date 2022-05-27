import * as axios from "axios";

//--------------------------------------
// Rest API: https://social-network.samuraijs.com/
//базовый URL: https://social-network.samuraijs.com/api/1.0
// withCredentials: true - авторизованный пользователь

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "0abc8177-4344-4f8d-aa25-70fc430dca6b"
  }
});


export const usersAPI = {
  getUsers(currentPage=1, pageSize=10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  postFollow(userId) {
    return instance.post('follow/' + userId).then(response => response.data);
  },
  deleteUnfollow(userId) {
    return instance.delete('follow/' + userId).then(response => response.data);
  }
}


export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId).then(response => response.data);
  }
}

export const authAPI = {
  getAuth() {
    return instance.get('auth/me').then(response => response.data);
  }
}

