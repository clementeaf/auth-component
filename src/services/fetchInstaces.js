import { axiosInstance } from "../../config";
import { LOGIN_API, REGISTER_API } from "./endPoints";

export async function fetchRegisterUser (user) {
    try {
        return await axiosInstance.post(REGISTER_API, {
            username: user.user,
            password: user.password
        })
    } catch (error) {
        console.error("Error with user register", error);
        throw error;
    }
}

export async function fetchLoginUser (user) {
    try {
        return await axiosInstance.post(LOGIN_API, {
            username: user.user,
            password: user.password
        })
    } catch (error) {
        console.error("Error loging in", error);
        throw error;
    }
}