import axios from 'axios';

const baseUrl='http://fundoonotes.incubation.bridgelabz.com/api/';

export default class Axios{
    
    Post(url, data){
        return axios.post(baseUrl+url,data)
    }
    Post1(url, token, data){
        return axios.post(baseUrl+url , data, {
            headers:{
                authorization:token
            }
        })
    }
}
