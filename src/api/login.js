import { getData, postData } from '@/utils/request/request.js'

/*
    登录
    params:{
        "username": "root",
        "password": "123456",
    }
*/
export const login = (reqData) => {
    const url = '/auth/admin/login';
    const data = reqData;
    return postData(url, data);
}
/*
    查询管理后台用户详情
    params:{
      
    }
*/
export const adminUserInfoOwn = (reqData) => {
    const url = '/adminUser/info/own';
    const data = reqData;
    return getData(url, data);
}