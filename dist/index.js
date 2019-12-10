"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ServiceManagerService {
    _axiosFactory(host) {
        return axios_1.default.create({
            baseURL: host,
            timeout: 10000
        });
    }
    async getNews(url, usid) {
        try {
            const res = await this._axiosFactory(url).get("/api/news", {
                headers: {
                    "X-AppKey": "2014_MyBMW837",
                    "x-btcapi-usid": usid
                }
            });
            return res.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getServiceDiscover(url, query) {
        try {
            const res = await this._axiosFactory(url).get(`api/servicemanager/v0/discoverallservices/v1?${query}`, {
                headers: {
                    "AppKey": "51dee986-d5b2-4af1-b129-4eaedc6c32b6",
                    "AppVersion": "10.3.0"
                },
            });
            return res.data;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.ServiceManagerService = ServiceManagerService;
