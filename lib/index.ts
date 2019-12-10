import axios, { AxiosInstance } from "axios";
export class ServiceManagerService {

  private _axiosFactory(host:string){
    return  axios.create({
      baseURL: host,
      timeout: 10000
    });
  }

  async getNews(url:string,usid: string) {
    try {
      const res = await this._axiosFactory(url).get("/api/news", {    
        headers: {
          "X-AppKey": "2014_MyBMW837",
          "x-btcapi-usid": usid
        }
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }


  async getServiceDiscover(url:string,query:string){
    try {
      const res = await this._axiosFactory(url).get(`api/servicemanager/v0/discoverallservices/v1?${query}`, {    
        headers: {
          "AppKey": "51dee986-d5b2-4af1-b129-4eaedc6c32b6",
          "AppVersion": "10.3.0"
        }, 
        
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  


}
