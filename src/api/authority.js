import { getData, postData, deleteData, putData } from '@/utils/request/request.js'

/*
    获取后台所有用户组
    params:{
    }
*/
export const adminRoleAll = (reqData) => {
    const url = '/adminRole/all';
    const data = reqData;
    return getData(url, data);
}
/*
    创建管理后台用户组
    params:{
    }
*/
export const adminRoleAdd = (reqData) => {
    const url = '/adminRole';
    const data = reqData;
    return postData(url, data);
}
/*
    修改管理后台用户组
    params:{
    }
*/
export const adminRoleModify = (id, reqData) => {
    const url = `/adminRole/${id}`;
    const data = reqData;
    return putData(url, data);
}
/*
    删除管理后台用户组
    params:{
    }
*/
export const adminRoleDelete = (id) => {
    const url = `/adminRole/${id}`;
    const data = '';
    return deleteData(url, data);
}
/*
    管理用户分页查询
    params:{
    }
*/
export const adminUserPage = (reqData) => {
    const url = '/adminUser/page';
    const data = reqData;
    return getData(url, data);
}
/*
    修改管理后台用户
    params:{
    }
*/
export const adminUserModify = (id, reqData) => {
    const url = `/adminUser/${id}`;
    const data = reqData;
    return putData(url, data);
}
/*
    删除管理后台角色
    params:{
    }
*/
export const adminUserDelete = (id) => {
    const url = `/adminUser/${id}`;
    const data = '';
    return deleteData(url, data);
}
/*
    创建管理后台用户
    params:{
    }
*/
export const adminUserAdd = (reqData) => {
    const url = '/adminUser';
    const data = reqData;
    return postData(url, data);
}
/*
    重置管理后台用户密码
    params:{
    }
*/
export const adminUserPasswordReset = (id) => {
    const url = `/adminUser/password/reset/${id}`;
    const data = '';
    return putData(url, data);
}
/*
    管理后台权限分页查询
    params:{
    }
*/
export const adminPermissionPage = (reqData) => {
    const url = '/adminPermission/page';
    const data = reqData;
    return getData(url, data);
}
/*
    创建管理后台权限
    params:{
    }
*/
export const adminPermissionAdd = (reqData) => {
    const url = '/adminPermission';
    const data = reqData;
    return postData(url, data);
}
/*
    删除管理后台权限
    params:{
    }
*/
export const adminPermissionDelete = (id) => {
    const url = `/adminPermission/${id}`;
    const data = '';
    return deleteData(url, data);
}
/*
    修改管理后台权限
    params:{
    }
*/
export const adminPermissionModify = (id, reqData) => {
    const url = `/adminPermission/${id}`;
    const data = reqData;
    return putData(url, data);
}
