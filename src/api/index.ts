import axios from "axios";
export interface IForm{
    name:string
    mail:string
    message:string
}
export const sendMail = (form:IForm)=> {
    axios.post('http://localhost:3010/sendMessage',form)
}
