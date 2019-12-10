export declare class ServiceManagerService {
    private _axiosFactory;
    getNews(url: string, usid: string): Promise<any>;
    getServiceDiscover(url: string, query: string): Promise<any>;
}
