/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import API_ENDPOINT from '../globals/api_endpoint';

class DataAPI {
    static async GET_obat() {
        const response = await fetch(`${API_ENDPOINT.OBAT_LIST}`);
        const responseJSON = await response.json();
        return responseJSON.obat;
    }

    // eslint-disable-next-line no-empty-function
    static async userLogin(user) {
        const response = await fetch(`${API_ENDPOINT.LOGIN_USER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: user,
        });
        return response.json();
    }

    static async registerUser(user) {
        const response = await fetch(`${API_ENDPOINT.CREATE_USER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: user,
        });
       return response.json();
    }

    static async getArticle() {
        const response = await fetch(`${API_ENDPOINT.GET_ARTIKEL}`);
        return response.json();
    }

    static async getArtikelById(id) {
        const response = await fetch(`${API_ENDPOINT.GET_ARTIKEL_ID(id)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    }

    static async detailObat(id) {
        const response = await fetch(`${API_ENDPOINT.DETAIL_OBAT(id)}`);
        return response.json();
    }

    static async getCovid() {
        const response = await fetch(`${API_ENDPOINT.COVID_LIST}`);
        return response.json();
    }

    static async detailCovid(id) {
        const response = await fetch(`${API_ENDPOINT.DETAIL_COVID(id)}`);
        return response.json();
    }

    static async createAnswer(userData) {
        const response = await fetch(`${API_ENDPOINT.CREATE_ANSWER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: userData,
        });
        return response.json();
    }

    static async getUserById(id, userAccessToken) {
        const response = await fetch(`${API_ENDPOINT.GET_USER_BY_ID(id)}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + userAccessToken,
            },
        });
        return response.json();
    }

    static async getAnswer() {
        const response = await fetch(`${API_ENDPOINT.GET_ANSWER}`);
        return response.json();
    }

    static async getLingkungan() {
        const response = await fetch(`${API_ENDPOINT.GET_LINGKUNGAN}`);
        return response.json();
    }

    static async getLingkunganById(id) {
        const response = await fetch(`${API_ENDPOINT.GET_LINGKUNGAN_BY_ID(id)}`);
        return response.json();
    }

    static async getFoodHealth() {
        const response = await fetch(`${API_ENDPOINT.GET_FOOD}`);
        return response.json();
    }

    static async getFoodHealthById(id) {
        const response = await fetch(`${API_ENDPOINT.GET_FOOD_BY_ID(id)}`);
        return response.json();
    }
}

export default DataAPI;
