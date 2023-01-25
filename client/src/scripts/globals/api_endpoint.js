import GLOBAL_VAR from './golbalVariabel';

const API_ENDPOINT = {
    OBAT_LIST: `${GLOBAL_VAR.URL}obat/list`,
    LOGIN_USER: `${GLOBAL_VAR.URL}user/login`,
    DETAIL_OBAT: (id) => `${GLOBAL_VAR.URL}obat/detail/${id}`,
    COVID_LIST: `${GLOBAL_VAR.URL}covid/list`,
    DETAIL_COVID: (id) => `${GLOBAL_VAR.URL}covid/detail/${id}`,
    CREATE_ANSWER: `${GLOBAL_VAR.URL}answer/add`,
    GET_USER: `${GLOBAL_VAR.URL}user/list`,
    GET_USER_BY_ID: (id) => `${GLOBAL_VAR.URL}user/id/${id}}`,
    GET_ANSWER: `${GLOBAL_VAR.URL}answer/list`,
    CREATE_USER: `${GLOBAL_VAR.URL}user/add`,
    GET_ARTIKEL_ID: (id) => `${GLOBAL_VAR.URL}article/detail/${id}`,
    GET_LINGKUNGAN: `${GLOBAL_VAR.URL}lingkungan/list`,
    GET_FOOD: `${GLOBAL_VAR.URL}food/list`,
    GET_FOOD_BY_ID: (id) => `${GLOBAL_VAR.URL}food/detail/${id}`,
    GET_LINGKUNGAN_BY_ID: (id) => `${GLOBAL_VAR.URL}lingkungan/detail/${id}`,
    GET_ARTIKEL: `${GLOBAL_VAR.URL}article/list`,
};

export default API_ENDPOINT;
