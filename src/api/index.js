import axiosIns from './resouce.js';

export function requestLogin(aaa){
  return axiosIns.get("manage/login",aaa)
}  