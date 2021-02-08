import axios from 'axios';

const baseUrl='http://fundoonotes.incubation.bridgelabz.com/api/';

export default class Axios{
    
    Post(url, data){
        // return axios.post(baseUrl+url, data)
        return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`,data)

    }
}
