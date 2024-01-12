import axios from 'axios';

export const style = {
  initialPosition:
    "translate-y-[30px] translate-x-[10px] text-black/70 ease-in-out duration-500",
  noPosition: "ease-in-out duration-500",
};

export const initialValues = {
    user: "",
    password: "",
}

export const forgotPasswordLinkMessage = "Forgot your password? Retrieve here"

// Objeto de cabeceras predeterminadas
const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const axiosInstance = axios.create({
  headers: defaultHeaders,
});
