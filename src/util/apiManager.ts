

class ApiManager {
    public backendAdminUrl = "";

    constructor() {
        this.backendAdminUrl = "http://192.168.103.77:50/";
    }

    public  getMessages(): Promise<Response> {
        
        return  fetch(`${this.backendAdminUrl}api/Message`,{ 
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            method: "GET",}
        )
        .then((data) => {
            return data;
        }).catch((error) => {
            return error;
        });
    }

    public sentLink(json: string):Promise<Response>{
        return  fetch(`${this.backendAdminUrl}api/FormUrl/AddUrl`,{ 
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            method: "POST",
            body:json}           
        )
        .catch((error) => {
            return error;
        });
    }

}

export default ApiManager;