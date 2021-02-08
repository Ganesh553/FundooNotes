import AxiosService from './axios';

const axiosService = new AxiosService()

export default class UserService {
    registration(data){
        console.log("UserService")
        console.log(data)
        return axiosService.Post('user/userSignUp', data)
    }
    login(data){
        console.log(data)
        return axiosService.Post('user/login', data)
    }
}