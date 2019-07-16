class ApiManager {
    public backendUrl = "";

    constructor() {
        this.backendUrl = "http://localhost:5000/";
    }

    public async createAdminsPost(json: string): Promise<Response> {
        return await fetch(`${this.backendUrl}api/AdminsPost`, {
            body: json,
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            method: "POST"
        }).catch(error => {
            return error;
        });
    }
}

export default ApiManager;