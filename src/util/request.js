
import axios from 'axios';
var baseURL = 'http://localhost:8085';
const xhr = axios.create({
    baseURL,
    timeout: 10000,
});
export const postData = (url, data, needHeader) => {
    let cookei = {};
    cookei = {
        token: needHeader
    }
    return new Promise((resolve, reject) => {
        xhr({ url, data, cookei, method: 'post' })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => reject(err))
    })
}

export const getData = (url, params, needHeader) => {
    let cookei = {};
    cookei = {
        token: needHeader
    }
    console.log(cookei)
    
    return new Promise((resolve, reject) => {
        xhr({ url, params, cookei, method: 'get' })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}






















