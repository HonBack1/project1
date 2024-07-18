import axios from './axios'

export const  getMenu = (param)=>{ 
    return axios.request({
        url:'/permission/getMenu',
        method:'post',
        data:param
    })
}

// import axios from 'axios';

// const getMenu = (param) => {
//     return axios.request({
//         url: '/permission/getMenu',
//         method: 'post',
//         data: param
//     });
// };

// export default getMenu;
