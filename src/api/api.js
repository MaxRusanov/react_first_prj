import * as axios from "axios";

//--------------------------------------
// Rest API: https://social-network.samuraijs.com/
//базовый URL: https://social-network.samuraijs.com/api/1.0
// withCredentials: true - авторизованный пользователь
// Ваш ID: 24196

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "6ee90980-e607-48ed-b8dc-b33e3335c9ea"
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
  },
  getSatus(userId) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status) {
    return instance.put('profile/status/', {status: status});
  }
}

export const authAPI = {
  getAuth() {
    return instance.get('auth/me').then(response => response.data);
  }
}

