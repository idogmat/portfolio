import axios from "axios";

export interface IForm {
    name: string
    mail: string
    message: string
}

const instance = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://node-email-sender.vercel.app',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});
export const sendMail = (form: IForm): Promise<boolean> => {
    return instance.post('/sendMessage', form)
}
