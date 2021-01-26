import axios from "axios";

class HelloService {

    sendRequest() {
        // let username = "kelvdp";
        // let password = "test";

        // let basicHeader = "Basic " + window.btoa(username + ":" + password); // encrypts basic header req

        // second param to axios.get is the auth header to get access to request
        // return axios.get("http://localhost:8080/users", {
        //     headers: {
        //         authorization: basicHeader
        //     }
        // });

        // the above works for individual requests only, so better to use an interceptor

        return axios.get("http://localhost:8080/users");
    }
}

export default new HelloService();